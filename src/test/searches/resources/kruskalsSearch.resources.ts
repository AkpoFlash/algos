import { EdgeWeightedGraph } from "../../../main/structures";
import { createTestEdgeWeightedGraph } from "../../structures/resoures/edgeWeightedGraph.resources";

type TestDataType<T extends string | number | symbol> = {
    graph: EdgeWeightedGraph<T>,
    totalDistance: number,
    pathTo: [T, T][],
}

const graph = createTestEdgeWeightedGraph();

export const KRUSKALS_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        graph: graph[0],
        totalDistance: 1.81,
        pathTo: [[0, 7], [2, 3], [1, 7], [0, 2], [5, 7], [4, 5], [6, 2]],
    },
    {
        graph: graph[1],
        totalDistance: 1.81,
        pathTo: [['A', 'H'], ['C', 'D'], ['B', 'H'], ['A', 'C'], ['F', 'H'], ['E', 'F'], ['G', 'C']],
    }
]
