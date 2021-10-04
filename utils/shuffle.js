// with sort O(NlogN)
const shuffleSort = (arr) => {
    const indexes = arr.map((item, index) => ({index, val: Math.random()})).sort((a,b) => a.val-b.val);

    return indexes.map((item) => arr[item.index]);
}

// without sort O(N)
const shuffleInsert = (arr) => {
    for(let i = 1; i < arr.length; i++){
        const randIndex = Math.floor(Math.random() * i);
        [arr[randIndex], arr[i]] = [arr[i], arr[randIndex]];
    }
    return arr;
}
