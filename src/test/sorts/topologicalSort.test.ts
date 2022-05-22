import { DepthFirstOrder } from '../../main/sorts';
import { TOPOLOGICAL_TEST_DATA } from './resoures/topological.resources';

describe('topologicalSort', () => {
    it.each(TOPOLOGICAL_TEST_DATA)('should get correct reverse order', ({ digraph, reverseOrder }) => {
        const result = new DepthFirstOrder(digraph);
        expect(result.reverseOrder()).toEqual(reverseOrder);
    });

    it.each(TOPOLOGICAL_TEST_DATA)('should get correct topological order', ({ digraph, topologicalOrder }) => {
        const result = new DepthFirstOrder(digraph);
        expect(result.topologicalOrder()).toEqual(topologicalOrder);
    });
})
