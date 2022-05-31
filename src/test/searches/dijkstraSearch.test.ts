import { DijkstraSearch } from '../../main/searches';
import { SHORTEST_PATH_TEST_DATA } from './resources/shortestPath.resources';

describe('dijkstraSearch (Shortest path)', () => {
    it.each(SHORTEST_PATH_TEST_DATA)('should calculate total distance of MST', ({ graph, startVertice, dijkstraDistance }) => {
        const result = new DijkstraSearch(graph, startVertice);
        expect(result.getDistance()).toEqual(dijkstraDistance);
    });

    it.each(SHORTEST_PATH_TEST_DATA)('should find MST paths', ({ graph, startVertice, dijkstraPaths }) => {
        const result = new DijkstraSearch(graph, startVertice);
        expect(result.getPaths()).toEqual(dijkstraPaths);
    });
})
