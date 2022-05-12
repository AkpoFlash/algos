import { Graph } from '../../main/structures';
import { GRAPH_TEST_DATA } from './resoures/graph.resources';

describe('graph', () => {
    it('should be empty from scratch', () => {
        const graph = new Graph([]);
        expect(graph.countOfEdges).toBe(0);
        expect(graph.countOfVerticles).toBe(0);
    });

    it('should not be empty after add something', () => {
        const graph = new Graph([1, 2, 3]);
        graph.addEdge(1, 2);
        graph.addEdge(2, 3);
        expect(graph.countOfEdges).toBe(2);
        expect(graph.countOfVerticles).toBe(3);
    });

    it.each(GRAPH_TEST_DATA)('should give adjancent properly', ({ verticles, edgesPairs, adjacents }) => {
        const graph = new Graph(verticles);
        edgesPairs.forEach(edge => graph.addEdge(...edge));
        verticles.forEach(verticle => expect(graph.adjacent(verticle)).toEqual(adjacents[verticle]));
    });
})
