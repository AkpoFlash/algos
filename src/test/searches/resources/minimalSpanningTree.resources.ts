import { EdgeWeightedGraph } from "../../../main/structures";
import { createTestEdgeWeightedGraph } from "../../structures/resoures/edgeWeightedGraph.resources";

type TestDataType<T extends string | number | symbol> = {
    graph: EdgeWeightedGraph<T>,
    totalDistance: number,
    kruskalsPathTo: [T, T][],
    primsPathTo: [T, T][],
}

const graph = createTestEdgeWeightedGraph();

export const MST_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        graph: graph[0],
        totalDistance: 1.81,
        kruskalsPathTo: [[0, 7], [2, 3], [1, 7], [0, 2], [5, 7], [4, 5], [6, 2]],
        primsPathTo: [[0, 7], [1, 7], [0, 2], [2, 3], [5, 7], [4, 5], [6, 2]],
    },
    {
        graph: graph[1],
        totalDistance: 1.81,
        kruskalsPathTo: [['A', 'H'], ['C', 'D'], ['B', 'H'], ['A', 'C'], ['F', 'H'], ['E', 'F'], ['G', 'C']],
        primsPathTo: [['A', 'H'], ['B', 'H'], ['A', 'C'], ['C', 'D'], ['F', 'H'], ['E', 'F'], ['G', 'C']],
    }
]
