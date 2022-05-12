import { shuffleInsert } from '../utils/shuffle';

/**
 * This part of quick sort algorithm which find Kth smallest element, it takes linear (~N) time
 * 
 * @param _arr init array
 * @param k Kth smallest element (Kth index) into init array
 * @returns value of Kth smallest element or undefined
 */
export const quickSelect = <T>(_arr: T[], k: number): T | undefined => {
    const arr = shuffleInsert(_arr);

    let lo = 0;
    let hi = arr.length - 1;


    while (lo <= hi) {
        const pivot = _partitial(arr, lo, hi);
        if (pivot > k - 1) {
            hi = pivot - 1;
        }
        else if (pivot < k - 1) {
            lo = pivot + 1;
        }
        else {
            return arr[pivot];
        }
    }
}

const _partitial = <T>(arr: T[], lo: number, hi: number): number => {
    let cur = lo; // here we may chose some other index (randomly/media/3-median and etc)
    let i = lo;
    let j = hi;

    while (true) {
        while (arr[i] <= arr[cur]) {
            i++;
        }

        while (arr[cur] < arr[j]) {
            j--;
        }

        if (j <= i) {
            break;
        }

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    [arr[cur], arr[j]] = [arr[j], arr[cur]];

    return j;
}
