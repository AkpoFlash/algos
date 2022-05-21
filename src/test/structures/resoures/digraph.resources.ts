import { Digraph } from "../../../main/structures";

type TestDataType<T extends string | number | symbol> = {
    verticles: T[];
    edgesPairs: [T, T][];
    adjacents: Record<T, T[]>;
    adjacentsReversed: Record<T, T[]>;
}

export const DIGRAPH_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        verticles: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        edgesPairs: [[0, 1], [0, 2], [0, 6], [6, 4], [4, 3], [4, 5], [5, 0], [5, 3], [7, 8], [9, 10], [9, 11], [9, 12], [11, 12]],
        adjacents: { 0: [1, 2, 6], 1: [], 2: [], 3: [], 4: [3, 5], 5: [0, 3], 6: [4], 7: [8], 8: [], 9: [10, 11, 12], 10: [], 11: [12], 12: [] },
        adjacentsReversed: { 0: [5], 1: [0], 2: [0], 3: [4, 5], 4: [6], 5: [4], 6: [0], 7: [], 8: [7], 9: [], 10: [9], 11: [9], 12: [9, 11] },
    },
    {
        verticles: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N'],
        edgesPairs: [['A', 'B'], ['A', 'C'], ['A', 'G'], ['G', 'E'], ['E', 'D'], ['E', 'F'], ['F', 'A'], ['H', 'I'], ['J', 'L'], ['J', 'M'], ['J', 'N'], ['M', 'N']],
        adjacents: { 'A': ['B', 'C', 'G'], 'B': [], 'C': [], 'D': [], 'E': ['D', 'F'], 'F': ['A'], 'G': ['E'], 'H': ['I'], 'I': [], 'J': ['L', 'M', 'N'], 'L': [], 'M': ['N'], 'N': [] },
        adjacentsReversed: { 'A': ['F'], 'B': ['A'], 'C': ['A'], 'D': ['E'], 'E': ['G'], 'F': ['E'], 'G': ['A'], 'H': [], 'I': ['H'], 'J': [], 'L': ['J'], 'M': ['J'], 'N': ['J', 'M'] },
    }
]

export const createTestDigraph = (): Digraph<string | number | symbol>[] => {
    return DIGRAPH_TEST_DATA.map(item => {
        const digraph = new Digraph(item.verticles);
        item.edgesPairs.forEach(edge => digraph.addEdge(...edge));
        return digraph;
    })
}
