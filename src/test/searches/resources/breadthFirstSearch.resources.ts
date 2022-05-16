import { Graph } from "../../../main/structures";
import { createTestGraph } from "../../structures/resoures/graph.resources";

type TestDataType<T extends string | number | symbol> = {
    graph: Graph<T>,
    startVerticle: T,
    pathTo: T[],
    hasPathTo: boolean[]
    getPathTo: (T[] | undefined)[]
}

const graph = createTestGraph();

export const BFS_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        graph: graph[0],
        startVerticle: 0,
        pathTo: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        hasPathTo: [true, true, true, true, true, true, true, false, false, false, false, false, false],
        getPathTo: [[0], [1, 0], [2, 0], [3, 5, 0], [4, 6, 0], [5, 0], [6, 0], undefined, undefined, undefined, undefined, undefined, undefined]
    },
    {
        graph: graph[1],
        startVerticle: 'A',
        pathTo: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N'],
        hasPathTo: [true, true, true, true, true, true, true, false, false, false, false, false, false],
        getPathTo: [['A'], ['B', 'A'], ['C', 'A'], ['D', 'E', 'G', 'A'], ['E', 'G', 'A'], ['F', 'A'], ['G', 'A'], undefined, undefined, undefined, undefined, undefined, undefined]
    }
]
