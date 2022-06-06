type TestDataType<T> = {
    unsorted: T[];
    alphabet: T[];
    sorted: T[];
}

export const SORTING_WITH_DUBLICATES_TEST_DATA: TestDataType<string | number>[] = [
    {
        alphabet: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        unsorted: [5, 6, 5, 4, 4, 4, 5, 6, 4, 2, 1, 1, 0, 4, 1, 0],
        sorted: [0, 0, 1, 1, 1, 2, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6],
    },
    {
        alphabet: ['a', 'b', 'c', 'd', 'e', 'f'],
        unsorted: ['f', 'e', 'f', 'e', 'd', 'd', 'c', 'c', 'a', 'a', 'f', 'b'],
        sorted: ['a', 'a', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'f'],
    },
]
