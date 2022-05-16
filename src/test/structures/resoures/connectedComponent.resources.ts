import { Graph } from "../../../main/structures";
import { createTestGraph } from "./graph.resources";

type TestDataType<T extends string | number | symbol> = {
    graph: Graph<T>,
    componentCount: number,
    verticles: T[],
    componentId: number[],
}

const graph = createTestGraph();

export const CONNECTED_COMPONENT_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        graph: graph[0],
        componentCount: 3,
        verticles: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        componentId: [0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2],
    },
    {
        graph: graph[1],
        componentCount: 3,
        verticles: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N'],
        componentId: [0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2],
    }
]
