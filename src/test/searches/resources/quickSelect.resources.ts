type TestDataType<T> = {
    array: T[],
    k: number,
    expected: T | undefined
}

export const QUICK_SELECT_TEST_DATA: TestDataType<number | string>[] = [
    {
        array: [-1, 100, 24, 0, 1, 0, 23, 11, -23, -21, -1],
        k: 1,
        expected: -23
    },
    {
        array: [-1, 100, 24, 0, 1, 0, 23, 11, -23, -21, -1],
        k: 4,
        expected: -1
    },
    {
        array: [-1, 100, 24, 0, 1, 0, 23, 11, -23, -21, -1],
        k: 11,
        expected: 100
    },
    {
        array: [-1, 100, 24, 0, 1, 0, 23, 11, -23, -21, -1],
        k: 99,
        expected: undefined
    },
    {
        array: ['b', 'b', 'A', 'AA', '123', 'aaa', 'ccc', 'cc'],
        k: 1,
        expected: '123'
    },
    {
        array: ['b', 'b', 'A', 'AA', '123', 'aaa', 'ccc', 'cc'],
        k: 4,
        expected: 'aaa'
    },
    {
        array: ['b', 'b', 'A', 'AA', '123', 'aaa', 'ccc', 'cc'],
        k: 8,
        expected: 'ccc'
    },
    {
        array: ['b', 'b', 'A', 'AA', '123', 'aaa', 'ccc', 'cc'],
        k: 99,
        expected: undefined
    },
]
