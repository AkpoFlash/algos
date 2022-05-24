import { Edge, EdgeWeightedGraph } from '../../main/structures';
import { EDGE_WEIGHTED_GRAPH_TEST_DATA } from './resoures/edgeWeightedGraph.resources';

describe('edgeWeightedGraph', () => {
    it('should be empty from scratch', () => {
        const graph = new EdgeWeightedGraph([]);
        expect(graph.verticles.length).toBe(0);
        expect(graph.edges.length).toBe(0);
    });

    it('should not be empty after add something', () => {
        const graph = new EdgeWeightedGraph<number>([1, 2, 3]);
        graph.addEdge(new Edge<number>(1, 2, 0.5));
        graph.addEdge(new Edge<number>(1, 3, 0.2));
        expect(graph.verticles.length).toBe(3);
        expect(graph.edges.length).toBe(2);
    });

    it.each(EDGE_WEIGHTED_GRAPH_TEST_DATA)('should give adjacent properly', ({ verticles, edgesPairs, adjacentsNumber }) => {
        const graph = new EdgeWeightedGraph(verticles);
        edgesPairs.forEach(edge => graph.addEdge(edge));
        verticles.forEach((verticle, index) => expect(graph.adjacentEdges(verticle)?.length).toBe(adjacentsNumber[index]));
    });
})
