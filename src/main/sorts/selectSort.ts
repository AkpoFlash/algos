/**
 * This isn't stable sort
 * Complexity ~1/2N^2 and this complexity doesn't depend on input array
 * 
 * @param arr init unsorted array
 * @returns sorted array (in place)
 */
export const selectSort = <T>(arr: T[]): T[] => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}

// Example of usage:

// const arrNumber = [5, 4, 2, 1, 0, 6, 1, 2, 1, -1];
// const arrString = ['a', 'A', 'aa', 'ab', '123', 'Av', 'AW', 'aaa', 'bbb'];
// selectSort(arrNumber); // -> [ -1, 0, 1, 1, 1, 2, 2, 4, 5, 6 ]
// selectSort(arrString); // -> [ '123', 'A',  'AW', 'Av',  'a',  'aa', 'aaa', 'ab', 'bbb' ]
