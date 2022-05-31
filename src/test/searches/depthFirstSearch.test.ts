import { DepthFirstSearch } from '../../main/searches';
import { DFS_TEST_DATA } from './resources/depthFirstSearch.resources';

describe('depthFirstSearch', () => {
    it.each(DFS_TEST_DATA)('should check exist paths', ({ graph, startVertice, pathTo, hasPathTo}) => {
        const dfs = new DepthFirstSearch(graph, startVertice);
        pathTo.forEach((path, index) => expect(dfs.hasPathTo(path)).toBe(hasPathTo[index]));
    });

    it.each(DFS_TEST_DATA)('should find path from start vertice to target vertice', ({ graph, startVertice, pathTo, getPathTo}) => {
        const dfs = new DepthFirstSearch(graph, startVertice);
        pathTo.forEach((path, index) => expect(dfs.getPathTo(path)).toEqual(getPathTo[index]));
    });
})
