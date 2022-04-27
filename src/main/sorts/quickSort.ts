import { shuffleInsert } from '../utils';

/**
 * This is recurring algorithm
 * This sort is unstable, time complexity of this sort ~NlogN
 * 
 * @param _arr init unsorted array
 * @returns sorted array (in place)
 */
export const quickSort = <T>(_arr: T[]) => {
    const arr = shuffleInsert(_arr);

    const partition = (arr: T[], lo: number, hi: number) => {
        let i = lo;
        let j = hi + 1;

        while (true) {
            while (arr[++i] < arr[lo]) {
                if (i === hi) {
                    break;
                }
            }

            while (arr[lo] < arr[--j]) {
                if (j === lo) {
                    break;
                }
            }

            if (i >= j) {
                break;
            }

            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        [arr[lo], arr[j]] = [arr[j], arr[lo]];
        return j;

    }

    const sort = (arr: T[], lo: number, hi: number) => {
        if (hi <= lo) {
            return;
        }
        const pivot = partition(arr, lo, hi);
        sort(arr, lo, pivot - 1);
        sort(arr, pivot + 1, hi);
    }

    sort(arr, 0, arr.length - 1);

    return arr;
}

// Example of usage:

const arrNumber = [5, 4, 2, 1, 0, 6, 1, 2, 1, -1];
const arrString = ['a', 'A', 'aa', 'ab', '123', 'Af', 'AW', 'aaa', 'bbb'];
console.log(quickSort(arrNumber));
console.log(quickSort(arrString));
