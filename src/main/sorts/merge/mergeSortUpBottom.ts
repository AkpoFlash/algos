/**
 * This is recurring algorithm
 * Time complexity of this sort ~NlogN
 * Memory complexity of this sort proportinal to ~N, because we use auxiliary array
 * 
 * @param arr init unsorted array
 * @returns sorted array (pseudo in place)
 */
 export const mergeSortUpBottom = <T>(arr: T[]) => {
    const aux: T[] = [];

    const merge = (arr: T[], aux: T[], lo: number, mid: number, hi: number) => {
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

    const sort = (arr: T[], aux: T[], lo: number, hi: number) => {
        if (hi <= lo) {
            return;
        }
        const mid = Math.floor(lo + (hi - lo) / 2);
        sort(arr, aux, lo, mid);
        sort(arr, aux, mid + 1, hi);
        merge(arr, aux, lo, mid, hi);
    }

    sort(arr, aux, 0, arr.length - 1);

    return arr;
}

// Example of usage:

const arrNumber = [5, 4, 2, 1, 0, 6, 1, 2, 1, -1];
const arrString = ['a', 'A', 'aa', 'ab', '123', 'Af', 'AW', 'aaa', 'bbb'];
console.log(mergeSortUpBottom(arrNumber));
console.log(mergeSortUpBottom(arrString));
