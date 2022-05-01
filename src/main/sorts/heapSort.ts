/**
 * This sort is unstable
 * Time complexity ~NlogN
 * 
 * @param arr init unsorted array
 * @returns sorted array (in place)
 */
export const heapSort = <T>(arr: T[]): T[] => {
    let len = arr.length - 1;

    const sink = (index: number): void => {

        while (index * 2 <= len) {
            let childIndex = index * 2;
            
            // check witch of child are bigger, then choose it
            if (childIndex < len && arr[childIndex] < arr[childIndex + 1]) {
                childIndex = childIndex + 1;
            }

            // check if the child smaller then new item, then replace them
            if (arr[childIndex] <= arr[index]) {
                break;
            }
            
            [arr[index], arr[childIndex]] = [arr[childIndex], arr[index]];
            index = childIndex;
        }
    }

    for (let i = Math.floor(len / 2); i >= 0; i--) {
        sink(i);
    }

    while (len > 0) {
        [arr[0], arr[len]] = [arr[len], arr[0]];
        len = len - 1;
        sink(0);
    }

    return arr;
}

// Example of usage:

const arrNumber = [5, 4, 2, 1, 0, 6, 1, 2, 1, -1];
const arrString = ['a', 'A', 'aa', 'ab', '123', 'Af', 'AW', 'aaa', 'bbb'];
console.log(heapSort(arrNumber));
console.log(heapSort(arrString));
