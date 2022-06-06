/**
 * This sort is stable, time complexity of this sort ~(2N + A)
 * 
 * @param _arr init unsorted array
 * @returns sorted array
 */
export const radixSort = <T extends string | number | symbol>(_arr: T[], alphabet: T[]): T[] => {
    const len = _arr.length;
    const aux = [] as T[];
    const countMap: Map<T, number> = new Map(alphabet.map(char => [char, 0]));

    for (let i = 0; i < len; i++) {
        const count = countMap.get(_arr[i]) ?? 1;
        countMap.set(_arr[i], count + 1);
    }

    let acc = 0;
    for (let [value, count] of countMap) {
        countMap.set(value, acc);
        // tip: you need increase accumulator right AFTER the setting new value, in this way created offset for each character
        acc += count;
    }

    for (let i = 0; i < len; i++) {
        const count = countMap.get(_arr[i])!;
        aux[count] = _arr[i];
        countMap.set(_arr[i], count + 1);
    }

    return aux;
}

// Example of usage:

// const alphabetNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// const arrNumber = [5, 6, 5, 4, 4, 4, 5, 6, 4, 2, 1, 1, 0, 4, 1, 0];
// const alphabetString = ['a', 'b', 'c', 'd', 'e', 'f'];
// const arrString = ['f', 'e', 'f', 'e', 'd', 'd', 'c', 'c', 'a', 'a', 'f', 'b'];
// radixSort(arrNumber, alphabetNumber); // -> [0, 0, 1, 1, 1, 2, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6]
// radixSort(arrString, alphabetString); // -> ['a', 'a', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'f']
