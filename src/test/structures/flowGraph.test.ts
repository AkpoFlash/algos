import { FlowEdge, FlowGraph } from '../../main/structures';
import { FLOW_GRAPH_TEST_DATA } from './resoures/flowGraph.resources';

describe('flowGraph', () => {
    it('should be empty from scratch', () => {
        const graph = new FlowGraph([]);
        expect(graph.vertices.length).toBe(0);
        expect(graph.edges.length).toBe(0);
    });

    it('should not be empty after add something', () => {
        const graph = new FlowGraph<number>([1, 2, 3]);
        graph.addEdge(new FlowEdge<number>(1, 2, 0.5));
        graph.addEdge(new FlowEdge<number>(1, 3, 0.2));
        expect(graph.vertices.length).toBe(3);
        expect(graph.edges.length).toBe(2);
    });

    it.each(FLOW_GRAPH_TEST_DATA)('should give adjacent properly', ({ vertices, edgesPairs, adjacentsNumber }) => {
        const graph = new FlowGraph(vertices);
        edgesPairs.forEach(edge => graph.addEdge(edge));
        vertices.forEach((vertice, index) => expect(graph.adjacentEdges(vertice)?.length).toBe(adjacentsNumber[index]));
    });
})
