type TestDataType<T> = {
    input: [string, T][];
    getOutput: [string, T| undefined][];
    containsOutput: [string, boolean][];
}

export const TRIE_TEST_DATA: TestDataType<string | number>[] = [
    {
        input: [
            ['she', 0],
            ['shell', 1],
            ['shells', 2],
            ['by', 3],
            ['buy', 4],
            ['', 5],
            ['123', 6],
        ],
        getOutput: [
            ['she', 0],
            ['sh', undefined],
            ['shell', 1],
            ['shells', 2],
            ['shelter', undefined],
            ['by', 3],
            ['byy', undefined],
            ['buy', 4],
            ['bull', undefined],
            ['', 5],
            [' ', undefined],
            ['123', 6],
            ['1234', undefined],
        ],
        containsOutput: [
            ['she', true],
            ['sh', false],
            ['shell', true],
            ['shells', true],
            ['shelter', false],
            ['by', true],
            ['byy', false],
            ['buy', true],
            ['bull', false],
            ['', true],
            [' ', false],
            ['123', true],
            ['1234', false],
        ]
    },
    {
        input: [
            ['she', 'A'],
            ['shell', 'B'],
            ['shells', 'C'],
            ['by', 'D'],
            ['buy', 'E'],
            ['', 'F'],
            ['123', 'G'],
        ],
        getOutput: [
            ['she', 'A'],
            ['sh', undefined],
            ['shell', 'B'],
            ['shells', 'C'],
            ['shelter', undefined],
            ['by', 'D'],
            ['byy', undefined],
            ['buy', 'E'],
            ['bull', undefined],
            ['', 'F'],
            [' ', undefined],
            ['123', 'G'],
            ['1234', undefined],
        ],
        containsOutput: [
            ['she', true],
            ['sh', false],
            ['shell', true],
            ['shells', true],
            ['shelter', false],
            ['by', true],
            ['byy', false],
            ['buy', true],
            ['bull', false],
            ['', true],
            [' ', false],
            ['123', true],
            ['1234', false],
        ]
    }
]
