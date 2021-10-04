const a = [5, 4, 2, 1, 0, 6, 1, 2, 1];

const heapSort = (arr) => {
    let N = arr.length - 1;

    const sink = (k, N) => {
        while (2 * k <= N) {
            let j = 2 * k;
            if (j < N && arr[j] < arr[j + 1]) {
                j++;
            }
            if (arr[k] >= arr[j]) {
                break;
            }
            exch(k, j);
            k = j;
        }
    }

    const exch = (i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    for (let k = Math.floor(N / 2); k >= 0; k--) {
        sink(k, N);
    }

    while (N >= 0) {
        exch(0, N);
        N = N - 1;
        sink(0, N);
    }

    return arr;
}

console.log(heapSort(a));
