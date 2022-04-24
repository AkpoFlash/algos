namespace SelectSort {
    /**
     * Compolexity of this sort ~1/2N^2 and this complexuty doesn't depend on input array
     * 
     * @param arr init unsorted array
     * @returns sorted array (in place)
     */
    const selectSort = <T>(arr: T[]) => {
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

    const arrNumber = [5, 4, 2, 1, 0, 6, 1, 2, 1, -1];
    const arrString = ['a', 'A', 'aa', 'ab', '123', 'Av', 'AW', 'aaa', 'bbb'];
    console.log(selectSort(arrNumber));
    console.log(selectSort(arrString));
}
