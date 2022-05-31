import { TopologicalShortPathSearch } from '../../main/searches';
import { SHORTEST_PATH_TEST_DATA } from './resources/shortestPath.resources';

describe('topologicalShortPath', () => {
    it.each(SHORTEST_PATH_TEST_DATA)('should calculate distances', ({ graph, startVertice, distances }) => {
        const result = new TopologicalShortPathSearch(graph, startVertice);
        expect(result.getDistance()).toEqual(distances);
    });

    it.each(SHORTEST_PATH_TEST_DATA)('should find shortest paths', ({ graph, startVertice, paths }) => {
        const result = new TopologicalShortPathSearch(graph, startVertice);
        expect(result.getPaths()).toEqual(paths);
    });
})
