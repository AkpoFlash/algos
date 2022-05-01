/**
 * This isn't stable sort
 * Complexity of this sort difficult to determine, but it's approximatly ~N^3/2
 * 
 * @param arr init unsorted array
 * @returns sorted array (in place)
 */
export const shellSort = <T>(arr: T[]): T[] => {
    const len = arr.length;

    let h = 1;
    while (h < len / 3) {
        h = 3 * h + 1;
    }

    while (h >= 1) {
        for (let i = h; i < len; i++) {
            for (let j = i; j >= h; j -= h) {
                if (arr[j] < arr[j - h]) {
                    [arr[j], arr[j - h]] = [arr[j - h], arr[j]];
                }
            }
        }
        h = Math.floor(h / 3);
    }

    return arr;
}


// Example of usage:

const arrNumber = [5, 4, 2, 1, 0, 6, 1, 2, 1, -1];
const arrString = ['a', 'A', 'aa', 'ab', '123', 'Av', 'AW', 'aaa', 'bbb'];
console.log(shellSort(arrNumber));
console.log(shellSort(arrString));
