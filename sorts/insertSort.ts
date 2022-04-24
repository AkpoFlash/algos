namespace InsertSort {
    /**
     * Complexity of this sort ~1/4N^2 and this complexuty depends on input array
     * Especially effective with partialy sorted array or already sorted array and have linear (~N) complexity
     * 
     * @param arr init unsorted array
     * @returns sorted array (in place)
     */
    const insertSort = <T>(arr: T[]) => {
       const len = arr.length;
       for(let i = 0; i < len; i++){
           for(let j = i; j > 0; j--){
               if(arr[j] < arr[j-1]){
                   [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
               }
               else{
                   break;
               }
           }
       }
       return arr;
    }

    // Example of usage:

    const arrNumber = [5, 4, 2, 1, 0, 6, 1, 2, 1, -1];
    const arrString = ['a', 'A', 'aa', 'ab', '123', 'Af', 'AW', 'aaa', 'bbb'];
    console.log(insertSort(arrNumber));
    console.log(insertSort(arrString));
}
