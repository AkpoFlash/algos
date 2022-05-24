import { Digraph } from '../../main/structures';
import { DIGRAPH_TEST_DATA } from './resoures/digraph.resources';

describe('digraph', () => {
    it('should be empty from scratch', () => {
        const digraph = new Digraph([]);
        expect(digraph.countOfEdges).toBe(0);
        expect(digraph.countOfVerticles).toBe(0);
    });

    it('should not be empty after add something', () => {
        const digraph = new Digraph([1, 2, 3]);
        digraph.addEdge(1, 2);
        digraph.addEdge(2, 3);
        expect(digraph.countOfEdges).toBe(2);
        expect(digraph.countOfVerticles).toBe(3);
    });

    it.each(DIGRAPH_TEST_DATA)('should give adjacent properly', ({ verticles, edgesPairs, adjacents }) => {
        const digraph = new Digraph(verticles);
        edgesPairs.forEach(edge => digraph.addEdge(...edge));
        verticles.forEach(verticle => expect(digraph.adjacent(verticle)).toEqual(adjacents[verticle]));
    });

    it.each(DIGRAPH_TEST_DATA)('should give reversed adjacent properly', ({ verticles, edgesPairs, adjacentsReversed }) => {
        let digraph = new Digraph(verticles);
        edgesPairs.forEach(edge => digraph.addEdge(...edge));
        digraph = digraph.reverse();
        verticles.forEach(verticle => expect(digraph.adjacent(verticle)).toEqual(adjacentsReversed[verticle]));
    });
})
