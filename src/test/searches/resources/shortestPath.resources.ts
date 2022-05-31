import { EdgeWeightedDigraph } from "../../../main/structures";
import { createTestEdgeWeightedDigraph } from "../../structures/resoures/edgeWeightedDigraph.resources";

type TestDataType<T extends string | number | symbol> = {
    graph: EdgeWeightedDigraph<T>,
    startVertice: T,
    dijkstraPaths: Record<T, [T, T]>,
    dijkstraDistance: Record<T, number>,
}

const graph = createTestEdgeWeightedDigraph();

export const SHORTEST_PATH_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        graph: graph[0],
        startVertice: 0,
        dijkstraPaths: { '1': [0, 1], '2': [5, 2], '3': [2, 3], '4': [0, 4], '5': [4, 5], '6': [2, 6], '7': [0, 7] },
        dijkstraDistance: { '0': 0, '1': 5, '2': 14, '3': 17, '4': 9, '5': 13, '6': 25, '7': 8 },
    },
    {
        graph: graph[1],
        startVertice: 'A',
        dijkstraPaths: { 'B': ['A', 'B'], 'C': ['F', 'C'], 'D': ['C', 'D'], 'E': ['A', 'E'], 'F': ['E', 'F'], 'G': ['C', 'G'], 'H': ['A', 'H'] },
        dijkstraDistance: { 'A': 0, 'B': 5, 'C': 14, 'D': 17, 'E': 9, 'F': 13, 'G': 25, 'H': 8 },
    }
]
