type TestDataType<T extends string | number | symbol> = {
    values: T[];
    connection: [T, T][];
    hasConnection: [T, T, boolean][];
}

export const UNION_FIND_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        values: [0, 1, 2, 3, 4, 5, 6, 7],
        connection: [[0, 1], [0, 2], [1, 7], [3, 4], [5, 6], [3, 6]],
        hasConnection: [[0, 1, true], [1, 2, true], [0, 7, true], [6, 7, false], [10, 1, false], [0, 11, false]],
    },
    {
        values: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        connection: [['A', 'B'], ['A', 'C'], ['B', 'H'], ['D', 'E'], ['F', 'G'], ['D', 'G']],
        hasConnection: [['A', 'B', true], ['B', 'C', true], ['A', 'H', true], ['G', 'H', false], ['I', 'B', false], ['A', 'K', false]],
    }
];
