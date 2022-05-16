import { BreadthFirstSearch } from '../../main/searches';
import { BFS_TEST_DATA } from './resources/breadthFirstSearch.resources';

describe('breadthFirstSearch', () => {
    it.each(BFS_TEST_DATA)('should check exist paths', ({ graph, startVerticle, pathTo, hasPathTo }) => {
        const bfs = new BreadthFirstSearch(graph, startVerticle);
        pathTo.forEach((path, index) => expect(bfs.hasPathTo(path)).toBe(hasPathTo[index]));
    });

    it.each(BFS_TEST_DATA)('should find path from start verticle to target verticle', ({ graph, startVerticle, pathTo, getPathTo }) => {
        const bfs = new BreadthFirstSearch(graph, startVerticle);
        pathTo.forEach((path, index) => expect(bfs.getPathTo(path)).toEqual(getPathTo[index]));
    });
})
