import { KruskalSearch } from '../../main/searches';
import { MST_TEST_DATA } from './resources/minimalSpanningTree.resources';

describe('kruskalsSearch (MST)', () => {
    it.each(MST_TEST_DATA)('should calculate total distance of MST', ({ graph, totalDistance }) => {
        const result = new KruskalSearch(graph);
        expect(result.totalDistance).toBe(totalDistance);
    });

    it.each(MST_TEST_DATA)('should find MST paths', ({ graph, kruskalsPathTo }) => {
        const result = new KruskalSearch(graph);
        expect(result.getMstEdges()).toEqual(kruskalsPathTo);
    });
})
