import { Digraph } from '../../main/structures';
import { DIGRAPH_TEST_DATA } from './resoures/digraph.resources';

describe('digraph', () => {
    it('should be empty from scratch', () => {
        const digraph = new Digraph([]);
        expect(digraph.countOfEdges).toBe(0);
        expect(digraph.countOfVertices).toBe(0);
    });

    it('should not be empty after add something', () => {
        const digraph = new Digraph([1, 2, 3]);
        digraph.addEdge(1, 2);
        digraph.addEdge(2, 3);
        expect(digraph.countOfEdges).toBe(2);
        expect(digraph.countOfVertices).toBe(3);
    });

    it.each(DIGRAPH_TEST_DATA)('should give adjacent properly', ({ vertices, edgesPairs, adjacents }) => {
        const digraph = new Digraph(vertices);
        edgesPairs.forEach(edge => digraph.addEdge(...edge));
        vertices.forEach(vertice => expect(digraph.adjacentVertices(vertice)).toEqual(adjacents[vertice]));
    });

    it.each(DIGRAPH_TEST_DATA)('should give reversed adjacent properly', ({ vertices, edgesPairs, adjacentsReversed }) => {
        let digraph = new Digraph(vertices);
        edgesPairs.forEach(edge => digraph.addEdge(...edge));
        digraph = digraph.reverse();
        vertices.forEach(vertice => expect(digraph.adjacentVertices(vertice)).toEqual(adjacentsReversed[vertice]));
    });
})
