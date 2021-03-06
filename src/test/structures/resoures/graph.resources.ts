import { Graph } from "../../../main/structures";

type TestDataType<T extends string | number | symbol> = {
    vertices: T[];
    edgesPairs: [T, T][];
    adjacents: Record<T, T[]>;
}

export const GRAPH_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        vertices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        edgesPairs: [[0, 1], [0, 2], [0, 6], [6, 4], [4, 3], [4, 5], [5, 0], [5, 3], [7, 8], [9, 10], [9, 11], [9, 12], [11, 12]],
        adjacents: { 0: [1, 2, 6, 5], 1: [0], 2: [0], 3: [4, 5], 4: [6, 3, 5], 5: [4, 0, 3], 6: [0, 4], 7: [8], 8: [7], 9: [10, 11, 12], 10: [9], 11: [9, 12], 12: [9, 11] },
    },
    {
        vertices: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N'],
        edgesPairs: [['A', 'B'], ['A', 'C'], ['A', 'G'], ['G', 'E'], ['E', 'D'], ['E', 'F'], ['F', 'A'], ['H', 'I'], ['J', 'L'], ['J', 'M'], ['J', 'N'], ['M', 'N']],
        adjacents: { 'A': ['B', 'C', 'G', 'F'], 'B': ['A'], 'C': ['A'], 'D': ['E'], 'E': ['G', 'D', 'F'], 'F': ['E', 'A'], 'G': ['A', 'E'], 'H': ['I'], 'I': ['H'], 'J': ['L', 'M', 'N'], 'L': ['J'], 'M': ['J', 'N'], 'N': ['J', 'M'] },
    }
]

export const createTestGraph = (): Graph<string | number | symbol>[] => {
    return GRAPH_TEST_DATA.map(item => {
        const graph = new Graph(item.vertices);
        item.edgesPairs.forEach(edge => graph.addEdge(...edge));
        return graph;
    })
}
