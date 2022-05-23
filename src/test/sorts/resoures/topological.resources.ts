import { Digraph } from "../../../main/structures";
import { createTestAsycleDigraph } from "../../structures/resoures/digraph.resources";

type TestDataType<T extends string | number | symbol> = {
    digraph: Digraph<T>;
    reverseOrder: T[]
    topologicalOrder: T[]
}

const digraph = createTestAsycleDigraph();

export const TOPOLOGICAL_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        digraph: digraph[0],
        reverseOrder: [4, 1, 2, 5, 0, 6, 3],
        topologicalOrder: [3, 6, 0, 5, 2, 1, 4],
    },
    {
        digraph: digraph[1],
        reverseOrder: ['E', 'B', 'C', 'F', 'A', 'G', 'D'],
        topologicalOrder: ['D', 'G', 'A', 'F', 'C', 'B', 'E'],
    },
]
