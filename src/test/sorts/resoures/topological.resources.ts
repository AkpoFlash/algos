import { Digraph } from "../../../main/structures";

type AcyclicDigraphTestDataType<T extends string | number | symbol> = {
    verticles: T[];
    edgesPairs: [T, T][];
}

const ACYCLIC_DIGRAPH_TEST_DATA: AcyclicDigraphTestDataType<string | number | symbol>[] = [
    {
        verticles: [0, 1, 2, 3, 4, 5, 6],
        edgesPairs: [[0, 1], [0, 2], [0, 5], [1, 4], [3, 2], [3, 4], [3, 5], [3, 6], [5, 2], [6, 0], [6, 4]],
    },
    {
        verticles: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        edgesPairs: [['A', 'B'], ['A', 'C'], ['A', 'F'], ['B', 'E'], ['D', 'C'], ['D', 'E'], ['D', 'F'], ['D', 'G'], ['F', 'C'], ['G', 'A'], ['G', 'E']],
    },
]


type TopologicalTestDataType<T extends string | number | symbol> = {
    digraph: Digraph<T>;
    reverseOrder: T[]
    topologicalOrder: T[]
}

const createTestDigraph = (): Digraph<string | number | symbol>[] => {
    return ACYCLIC_DIGRAPH_TEST_DATA.map(item => {
        const digraph = new Digraph(item.verticles);
        item.edgesPairs.forEach(edge => digraph.addEdge(...edge));
        return digraph;
    })
}

const digraph = createTestDigraph();

export const TOPOLOGICAL_TEST_DATA: TopologicalTestDataType<string | number | symbol>[] = [
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
