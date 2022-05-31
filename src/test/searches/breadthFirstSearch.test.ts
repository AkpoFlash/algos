import { BreadthFirstSearch } from '../../main/searches';
import { BFS_TEST_DATA } from './resources/breadthFirstSearch.resources';

describe('breadthFirstSearch', () => {
    it.each(BFS_TEST_DATA)('should check exist paths', ({ graph, startVertice, pathTo, hasPathTo }) => {
        const bfs = new BreadthFirstSearch(graph, startVertice);
        pathTo.forEach((path, index) => expect(bfs.hasPathTo(path)).toBe(hasPathTo[index]));
    });

    it.each(BFS_TEST_DATA)('should find path from start vertice to target vertice', ({ graph, startVertice, pathTo, getPathTo }) => {
        const bfs = new BreadthFirstSearch(graph, startVertice);
        pathTo.forEach((path, index) => expect(bfs.getPathTo(path)).toEqual(getPathTo[index]));
    });
})
