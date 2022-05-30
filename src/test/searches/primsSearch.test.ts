import { PrimSearch } from '../../main/searches';
import { MST_TEST_DATA } from './resources/minimalSpanningTree.resources';

describe('primsSearch (MST)', () => {
    it.each(MST_TEST_DATA)('should calculate total distance of MST', ({ graph, totalDistance }) => {
        const result = new PrimSearch(graph);
        expect(result.totalDistance).toBe(totalDistance);
    });

    it.each(MST_TEST_DATA)('should find MST paths', ({ graph, primsPathTo }) => {
        const result = new PrimSearch(graph);
        expect(result.getMstEdges()).toEqual(primsPathTo);
    });
})
