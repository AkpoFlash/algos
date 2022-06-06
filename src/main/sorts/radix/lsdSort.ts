/**
 * This algorithm work only with strings and with strings the equal length
 * This sort is stable, time complexity of this sort ~(2WN)
 * 
 * @param initArr init unsorted array
 * @param alphabet available symbols for sorting
 * @returns sorted array (in place)
 */
export const lsdSort = (initArr: string[], alphabet: string[], stringLength: number): string[] => {
    const aux = [] as string[];
    const len = initArr.length;

    for (let j = stringLength - 1; j >= 0; j--) {
        const countMap = new Map(alphabet.map(char => [char, 0]));

        for (let i = 0; i < len; i++) {
            const count = countMap.get(initArr[i][j]) ?? 0;
            countMap.set(initArr[i][j], count + 1);
        }

        let acc = 0;
        for (let [value, count] of countMap) {
            countMap.set(value, acc);
            // tip: you need increase accumulator right AFTER the setting new value, in this way created offset for each character
            acc += count;
        }


        for (let i = 0; i < len; i++) {
            const count = countMap.get(initArr[i][j])!;
            aux[count] = initArr[i];
            countMap.set(initArr[i][j], count + 1);
        }

        for (let i = 0; i < len; i++) {
            initArr[i] = aux[i];
        }
    }

    return initArr;
}

// Example of usage:

// const stringLength = 3;
// const alphabetString = ['a', 'b', 'c', 'd', 'e', 'f'];
// const arrString = ['fff', 'efc', 'fea', 'eee', 'dac', 'daa', 'cbc', 'ccb', 'aaa', 'aab', 'fff', 'baf'];
// lsdSort(arrString, alphabetString, stringLength); // -> [ 'aaa', 'aab', 'baf', 'cbc', 'ccb', 'daa', 'dac', 'eee', 'efc', 'fea', 'fff', 'fff' ]
