import { Edge, EdgeWeightedGraph } from "../../../main/structures";

type TestDataType<T extends string | number | symbol> = {
    vertices: T[];
    edgesPairs: Edge<T>[];
    adjacentsNumber: number[];
}

export const EDGE_WEIGHTED_GRAPH_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        vertices: [0, 1, 2, 3, 4, 5, 6, 7],
        edgesPairs: [
            new Edge<string | number | symbol>(4, 5, 0.35),
            new Edge<string | number | symbol>(4, 7, 0.37),
            new Edge<string | number | symbol>(5, 7, 0.28),
            new Edge<string | number | symbol>(0, 7, 0.16),
            new Edge<string | number | symbol>(1, 5, 0.32),
            new Edge<string | number | symbol>(0, 4, 0.38),
            new Edge<string | number | symbol>(2, 3, 0.17),
            new Edge<string | number | symbol>(1, 7, 0.19),
            new Edge<string | number | symbol>(0, 2, 0.26),
            new Edge<string | number | symbol>(1, 2, 0.36),
            new Edge<string | number | symbol>(1, 3, 0.29),
            new Edge<string | number | symbol>(2, 7, 0.34),
            new Edge<string | number | symbol>(6, 2, 0.40),
            new Edge<string | number | symbol>(3, 6, 0.52),
            new Edge<string | number | symbol>(6, 0, 0.58),
            new Edge<string | number | symbol>(6, 4, 0.93)
        ],
        adjacentsNumber: [4, 4, 5, 3, 4, 3, 4, 5],
    },
    {
        vertices: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        edgesPairs: [
            new Edge<string | number | symbol>('E', 'F', 0.35),
            new Edge<string | number | symbol>('E', 'H', 0.37),
            new Edge<string | number | symbol>('F', 'H', 0.28),
            new Edge<string | number | symbol>('A', 'H', 0.16),
            new Edge<string | number | symbol>('B', 'F', 0.32),
            new Edge<string | number | symbol>('A', 'E', 0.38),
            new Edge<string | number | symbol>('C', 'D', 0.17),
            new Edge<string | number | symbol>('B', 'H', 0.19),
            new Edge<string | number | symbol>('A', 'C', 0.26),
            new Edge<string | number | symbol>('B', 'C', 0.36),
            new Edge<string | number | symbol>('B', 'D', 0.29),
            new Edge<string | number | symbol>('C', 'H', 0.34),
            new Edge<string | number | symbol>('G', 'C', 0.40),
            new Edge<string | number | symbol>('D', 'G', 0.52),
            new Edge<string | number | symbol>('G', 'A', 0.58),
            new Edge<string | number | symbol>('G', 'E', 0.93)
        ],
        adjacentsNumber: [4, 4, 5, 3, 4, 3, 4, 5],
    }
]

export const createTestEdgeWeightedGraph = (): EdgeWeightedGraph<string | number | symbol>[] => {
    return EDGE_WEIGHTED_GRAPH_TEST_DATA.map(item => {
        const graph = new EdgeWeightedGraph(item.vertices);
        item.edgesPairs.forEach(edge => graph.addEdge(edge));
        return graph;
    })
}
