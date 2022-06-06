type TestDataType<T> = {
    unsorted: T[];
    alphabet: T[];
    stringsLength: number;
    sorted: T[];
}

export const SORTING_STRING_TEST_DATA: TestDataType<string>[] = [
    {
        alphabet: ['a', 'b', 'c', 'd', 'e', 'f'],
        unsorted: ['fff', 'efc', 'fea', 'eee', 'dac', 'daa', 'cbc', 'ccb', 'aaa', 'aab', 'fff', 'baf'],
        stringsLength: 3,
        sorted: ['aaa', 'aab', 'baf', 'cbc', 'ccb', 'daa', 'dac', 'eee', 'efc', 'fea', 'fff', 'fff'],
    },
]
