import { FlowEdge, FlowGraph } from "../../../main/structures";

type TestDataType<T extends string | number | symbol> = {
    vertices: T[];
    edgesPairs: FlowEdge<T>[];
    adjacentsNumber: number[];
}

export const FLOW_GRAPH_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        vertices: [0, 1, 2, 3, 4, 5, 6, 7],
        edgesPairs: [
            new FlowEdge<string | number | symbol>(0, 1, 10),
            new FlowEdge<string | number | symbol>(0, 2, 5),
            new FlowEdge<string | number | symbol>(0, 3, 15),
            new FlowEdge<string | number | symbol>(1, 2, 4),
            new FlowEdge<string | number | symbol>(1, 4, 9),
            new FlowEdge<string | number | symbol>(1, 5, 15),
            new FlowEdge<string | number | symbol>(2, 3, 4),
            new FlowEdge<string | number | symbol>(2, 5, 8),
            new FlowEdge<string | number | symbol>(3, 6, 16),
            new FlowEdge<string | number | symbol>(4, 5, 15),
            new FlowEdge<string | number | symbol>(4, 7, 10),
            new FlowEdge<string | number | symbol>(5, 6, 15),
            new FlowEdge<string | number | symbol>(5, 7, 10),
            new FlowEdge<string | number | symbol>(6, 2, 6),
            new FlowEdge<string | number | symbol>(6, 7, 10),
        ],
        adjacentsNumber: [3, 4, 5, 3, 3, 5, 4, 3],
    },
    {
        vertices: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        edgesPairs: [
            new FlowEdge<string | number | symbol>('A', 'B', 10),
            new FlowEdge<string | number | symbol>('A', 'C', 5),
            new FlowEdge<string | number | symbol>('A', 'D', 15),
            new FlowEdge<string | number | symbol>('B', 'C', 4),
            new FlowEdge<string | number | symbol>('B', 'E', 9),
            new FlowEdge<string | number | symbol>('B', 'F', 15),
            new FlowEdge<string | number | symbol>('C', 'D', 4),
            new FlowEdge<string | number | symbol>('C', 'F', 8),
            new FlowEdge<string | number | symbol>('D', 'G', 16),
            new FlowEdge<string | number | symbol>('E', 'F', 15),
            new FlowEdge<string | number | symbol>('E', 'H', 10),
            new FlowEdge<string | number | symbol>('F', 'G', 15),
            new FlowEdge<string | number | symbol>('F', 'H', 10),
            new FlowEdge<string | number | symbol>('G', 'C', 6),
            new FlowEdge<string | number | symbol>('G', 'H', 10),
        ],
        adjacentsNumber: [3, 4, 5, 3, 3, 5, 4, 3],
    }
]

export const createTestFlowGraph = (): FlowGraph<string | number | symbol>[] => {
    return FLOW_GRAPH_TEST_DATA.map(item => {
        const graph = new FlowGraph(item.vertices);
        item.edgesPairs.forEach(edge => graph.addEdge(edge));
        return graph;
    })
}
