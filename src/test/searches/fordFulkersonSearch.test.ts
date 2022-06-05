import { FordFulkersonSearch } from '../../main/searches';
import { FORD_FULKERSON_TEST_DATA } from './resources/fordFulkersonSearch.resources';

describe('fordFulkersonSearch (MaxFlow)', () => {
    it.each(FORD_FULKERSON_TEST_DATA)('should calculate maximum flow', ({ graph, startVertice, targetVertice, flowValue }) => {
        const result = new FordFulkersonSearch(graph, startVertice, targetVertice);
        expect(result.getFlow()).toBe(flowValue);
    });
})
