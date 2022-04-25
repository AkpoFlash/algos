/**
 * This is inefficient algorithm for suffling with sorting which takes ~NlogN
 * 
 * @param arr init unsorted array
 * @returns sorted array (new instance)
 */
export const shuffleSort = <T>(arr: T[]) => {
    const indexes = arr.map((_, index) => ({ index, val: Math.random() })).sort((a, b) => a.val - b.val);

    return indexes.map((item) => arr[item.index]);
}

/**
 * This is effective algorithm for suffling which takes linear time ~N
 * 
 * @param arr init unsorted array
 * @returns sorted array (new instance)
 */
export const shuffleInsert = <T>(arr: T[]) => {
    for (let i = 1; i < arr.length; i++) {
        const randomIndex = Math.round(Math.random() * i);
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
}

// Example of usage:

const arrNumber = [5, 4, 2, 1, 0, 6, 1, 2, 1, -1];
const arrString = ['a', 'A', 'aa', 'ab', '123', 'Av', 'AW', 'aaa', 'bbb'];
console.log(shuffleInsert(arrNumber));
console.log(shuffleInsert(arrString));
