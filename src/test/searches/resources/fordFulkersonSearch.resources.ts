import { FlowGraph } from "../../../main/structures";
import { createTestFlowGraph } from "../../structures/resoures/flowGraph.resources";

type TestDataType<T extends string | number | symbol> = {
    graph: FlowGraph<T>,
    startVertice: T,
    targetVertice: T,
    flowValue: number;
}

const graph = createTestFlowGraph();

export const FORD_FULKERSON_TEST_DATA: TestDataType<string | number | symbol>[] = [
    {
        graph: graph[0],
        startVertice: 0,
        targetVertice: 7,
        flowValue: 28,
    },
    {
        graph: graph[1],
        startVertice: 'A',
        targetVertice: 'H',
        flowValue: 28,
    }
]
