type Node<K, V> = {
    key: K;
    value: V;
}

type TestDataType<K, V> = {
    input: Node<K, V>[];
    max: Node<K, V>;
    min: Node<K, V>;
    unexisting_key: V;
}

export const BST_TEST_DATA: TestDataType<string | number, string | number>[] = [
    {
        input: [
            { key: 2, value: 2 },
            { key: 1, value: 1 },
            { key: 3, value: 3 },
            { key: 0, value: 0 },
            { key: 10, value: 10 },
            { key: 7, value: 7 },
            { key: -1, value: -1 },
        ],
        max: { key: 10, value: 10 },
        min: { key: -1, value: -1 },
        unexisting_key: 100500,
    },
    {
        input: [
            { key: 'C', value: 'C' },
            { key: 'B', value: 'B' },
            { key: 'F', value: 'F' },
            { key: 'X', value: 'X' },
            { key: 'A', value: 'A' },
            { key: '', value: '' },
            { key: '123', value: '123' },
            { key: '!!!', value: '!!!' },
        ],
        max: { key: 'X', value: 'X' },
        min: { key: '', value: '' },
        unexisting_key: 'UNEXISTING_KEY',
    }
]
