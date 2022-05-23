import { Digraph } from "../../../main/structures";
import { createTestDigraph } from "./digraph.resources";

type TestDataType<T extends string | number | symbol> = {
    graph: Digraph<T>,
    componentCount: number,
    verticles: T[],
    componentId: number[],
}

const digraph = createTestDigraph();

export const STRONG_CONNECTED_COMPONENT_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        graph: digraph[0],
        componentCount: 10,
        verticles: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        componentId: [9, 8, 7, 6, 9, 9, 9, 5, 4, 3, 2, 1, 0],
    },
    {
        graph: digraph[1],
        componentCount: 10,
        verticles: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N'],
        componentId: [9, 8, 7, 6, 9, 9, 9, 5, 4, 3, 2, 1, 0],
    }
]
