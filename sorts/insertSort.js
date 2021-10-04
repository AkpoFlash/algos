const insertSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j >= 0; j--){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            else{
                break;
            }
        }
    }
    return arr;
}
