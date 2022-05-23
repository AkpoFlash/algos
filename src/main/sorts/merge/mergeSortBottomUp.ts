/**
 * This is non-recurring algorithm
 * This sort is stable, time complexity of this sort ~NlogN
 * Memory complexity of this sort proportinal to ~N, because we use auxiliary array
 * 
 * @param arr init unsorted array
 * @returns sorted array (pseudo in place)
 */
export const mergeSortBottomUp = <T>(arr: T[]): T[] => {
    const len = arr.length;
    const aux: T[] = [];

    const merge = (arr: T[], aux: T[], lo: number, mid: number, hi: number): void => {
        for (let i = lo; i <= hi; i++) {
            aux[i] = arr[i];
        }

        let i = lo;
        let j = mid + 1;
        for (let k = lo; k <= hi; k++) {
            if (i > mid) {
                arr[k] = aux[j++];
            }
            else if (j > hi) {
                arr[k] = aux[i++];
            }
            else if (aux[j] < aux[i]) {
                arr[k] = aux[j++];
            }
            else {
                arr[k] = aux[i++];
            }
        }
    }

    for (let size = 1; size < len; size += size) {
        for (let lo = 0; lo < len - size; lo += size + size) {
            merge(arr, aux, lo, lo + size - 1, Math.min(lo + size + size - 1, len - 1));
        }
    }

    return arr;
}

// Example of usage:

// const arrNumber = [5, 4, 2, 1, 0, 6, 1, 2, 1, -1];
// const arrString = ['a', 'A', 'aa', 'ab', '123', 'Af', 'AW', 'aaa', 'bbb'];
// mergeSortBottomUp(arrNumber); // -> [ -1, 0, 1, 1, 1, 2, 2, 4, 5, 6 ]
// mergeSortBottomUp(arrString); // -> [ '123', 'A',  'AW', 'Av',  'a',  'aa', 'aaa', 'ab', 'bbb' ]
