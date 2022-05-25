import { KruskalSearch } from '../../main/searches';
import { KRUSKALS_TEST_DATA } from './resources/kruskalsSearch.resources';

describe('kruskalsSearch (MST)', () => {
    it.each(KRUSKALS_TEST_DATA)('should calculate total distance of MST', ({graph, totalDistance}) => {
        const result = new KruskalSearch(graph);
        expect(result.totalDistance).toBe(totalDistance);
    });

    it.each(KRUSKALS_TEST_DATA)('should find MST paths', ({graph, pathTo}) => {
        const result = new KruskalSearch(graph);
        expect(result.getMstEdges()).toEqual(pathTo);
    });
})
