const shellSort = (arr) => {
    let h = 1;
    while (h <= arr.length / 3) h = 3 * h + 1;

    while (h >= 1) {

        for (let i = h; i < arr.length; i++) {
            for (let j = i; j >= h && arr[j] < arr[j - h]; j -= h) {
                [arr[j], arr[j - h]] = [arr[j - h], arr[j]];
            }
        }

        h = Math.floor(h / 3);
    }
    return arr;
}
