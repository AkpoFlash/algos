type TestType<T> = {
    unsorted: T[]
    sorted: T[]
}

export const UNSORTED_DATA: TestType<string | number>[] = [
    {
        unsorted: [-1, 100, 24, 0, 1, 0, 23, 11, -23, -21, -1],
        sorted: [-23, -21, -1, -1, 0, 0, 1, 11, 23, 24, 100]
    },
    {
        unsorted: ['b', 'b', 'A', 'AA', '123', 'aaa', 'ccc', 'cc'],
        sorted: ['123', 'A', 'AA', 'aaa', 'b', 'b', 'cc', 'ccc']
    },
]
