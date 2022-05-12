import { Maybe } from '../../../main/types';

type Node<K, V> = {
    key: K;
    value: V;
    rank?: number;
}

type Rounding<K, V> = {
    key: K;
    result: Maybe<V>;
}

type TestDataType<K, V> = {
    input: Node<K, V>[];
    max: Node<K, V>;
    min: Node<K, V>;
    unexisting_key: V;
    floor: Rounding<K, V>[];
    ceil: Rounding<K, V>[];
}

export const BST_TEST_DATA: TestDataType<string | number, string | number>[] = [
    {
        input: [
            { key: 2, value: 2, rank: 3 },
            { key: 1, value: 1, rank: 2 },
            { key: 3, value: 3, rank: 4 },
            { key: 0, value: 0, rank: 1 },
            { key: 10, value: 10, rank: 6 },
            { key: 7, value: 7, rank: 5 },
            { key: -1, value: -1, rank: 0 },
        ],
        max: { key: 10, value: 10 },
        min: { key: -1, value: -1 },
        floor: [
            { key: 0, result: 0 },
            { key: -5, result: undefined },
            { key: 100, result: 10 },
            { key: 5, result: 3 },
        ],
        ceil: [
            { key: 0, result: 0 },
            { key: -5, result: -1 },
            { key: 100, result: undefined },
            { key: 5, result: 7 },
        ],
        unexisting_key: 100500,
    },
    {
        input: [
            { key: 'C', value: 'C', rank: 5 },
            { key: 'B', value: 'B', rank: 4 },
            { key: 'F', value: 'F', rank: 6 },
            { key: 'X', value: 'X', rank: 7 },
            { key: 'A', value: 'A', rank: 3 },
            { key: '', value: '', rank: 0 },
            { key: '123', value: '123', rank: 2 },
            { key: '!!!', value: '!!!', rank: 1 },
        ],
        max: { key: 'X', value: 'X' },
        min: { key: '', value: '' },
        floor: [
            { key: '', result: '' },
            { key: ' ', result: '' },
            { key: '~', result: 'X' },
            { key: 'D', result: 'C' },
        ],
        ceil: [
            { key: '', result: '' },
            { key: ' ', result: '!!!' },
            { key: '~', result: undefined },
            { key: 'D', result: 'F' },
        ],
        unexisting_key: 'UNEXISTING_KEY',
    }
]
