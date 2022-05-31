import { DirectedEdge, EdgeWeightedDigraph } from "../../../main/structures";

type TestDataType<T extends string | number | symbol> = {
    vertices: T[];
    edgesPairs: DirectedEdge<T>[];
    adjacentsNumber: number[];
}

export const EDGE_WEIGHTED_DIGRAPH_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        vertices: [0, 1, 2, 3, 4, 5, 6, 7],
        edgesPairs: [
            new DirectedEdge<string | number | symbol>(0, 1, 5),
            new DirectedEdge<string | number | symbol>(0, 4, 9),
            new DirectedEdge<string | number | symbol>(0, 7, 8),
            new DirectedEdge<string | number | symbol>(1, 2, 12),
            new DirectedEdge<string | number | symbol>(1, 3, 15),
            new DirectedEdge<string | number | symbol>(1, 7, 4),
            new DirectedEdge<string | number | symbol>(2, 3, 3),
            new DirectedEdge<string | number | symbol>(2, 6, 11),
            new DirectedEdge<string | number | symbol>(3, 6, 9),
            new DirectedEdge<string | number | symbol>(4, 5, 4),
            new DirectedEdge<string | number | symbol>(4, 6, 20),
            new DirectedEdge<string | number | symbol>(4, 7, 5),
            new DirectedEdge<string | number | symbol>(5, 2, 1),
            new DirectedEdge<string | number | symbol>(5, 6, 13),
            new DirectedEdge<string | number | symbol>(7, 5, 6),
            new DirectedEdge<string | number | symbol>(7, 2, 7)
        ],
        adjacentsNumber: [3, 3, 2, 1, 3, 2, 0, 2],
    },
    {
        vertices: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        edgesPairs: [
            new DirectedEdge<string | number | symbol>('A', 'B', 5),
            new DirectedEdge<string | number | symbol>('A', 'D', 9),
            new DirectedEdge<string | number | symbol>('A', 'H', 8),
            new DirectedEdge<string | number | symbol>('B', 'C', 12),
            new DirectedEdge<string | number | symbol>('B', 'D', 15),
            new DirectedEdge<string | number | symbol>('B', 'H', 4),
            new DirectedEdge<string | number | symbol>('C', 'D', 3),
            new DirectedEdge<string | number | symbol>('C', 'G', 11),
            new DirectedEdge<string | number | symbol>('D', 'G', 9),
            new DirectedEdge<string | number | symbol>('E', 'F', 4),
            new DirectedEdge<string | number | symbol>('E', 'G', 20),
            new DirectedEdge<string | number | symbol>('E', 'H', 5),
            new DirectedEdge<string | number | symbol>('F', 'C', 1),
            new DirectedEdge<string | number | symbol>('F', 'G', 13),
            new DirectedEdge<string | number | symbol>('H', 'F', 6),
            new DirectedEdge<string | number | symbol>('H', 'C', 7)
        ],
        adjacentsNumber: [3, 3, 2, 1, 3, 2, 0, 2],
    }
]

export const createTestEdgeWeightedDigraph = (): EdgeWeightedDigraph<string | number | symbol>[] => {
    return EDGE_WEIGHTED_DIGRAPH_TEST_DATA.map(item => {
        const graph = new EdgeWeightedDigraph(item.vertices);
        item.edgesPairs.forEach(edge => graph.addEdge(edge));
        return graph;
    })
}
