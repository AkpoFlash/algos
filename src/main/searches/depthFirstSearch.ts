import { Digraph, Graph } from "../structures";

/**
 * This depth-first search (DFS) algorithm make possible to find all reachable vertices for ~(E + V) time
 * where E - is number of edges and V is number of vertices
 */
export class DepthFirstSearch<T extends string | number | symbol> {
    private _marked: Map<T, boolean> = new Map();
    private _edgeTo: Map<T, T | undefined> = new Map();

    constructor(graph: Graph<T> | Digraph<T>, startVertice: T) {
        this._dfs(graph, startVertice);
    }

    private _dfs = (graph: Graph<T> | Digraph<T>, vertice: T): void => {
        const adjacent = graph.adjacentVertices(vertice) || [];
        this._marked.set(vertice, true);

        for (let i = 0; i < adjacent.length; i++) {
            if (!this._marked.has(adjacent[i])) {
                this._dfs(graph, adjacent[i]);
                this._edgeTo.set(adjacent[i], vertice);
            }
        }
    }

    public hasPathTo = (vertice: T): boolean => {
        return !!this._marked.get(vertice);
    }

    public getPathTo = (vertice: T): T[] | undefined => {
        if (!this.hasPathTo(vertice)) {
            return;
        }

        const path: T[] = [];
        for (let i: T | undefined = vertice; i !== undefined; i = this._edgeTo.get(i)) {
            path.push(i);
        }

        return path;
    }

}

// Example of usage:

// const graph = new Graph<number>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

// graph.addEdge(0, 1);
// graph.addEdge(0, 2);
// graph.addEdge(0, 6);
// graph.addEdge(6, 4);
// graph.addEdge(4, 3);
// graph.addEdge(4, 5);
// graph.addEdge(5, 0);
// graph.addEdge(7, 8);
// graph.addEdge(9, 10);
// graph.addEdge(9, 11);
// graph.addEdge(9, 12);
// graph.addEdge(11, 12);

// const dfs = new DepthFirstSearch(graph, 0);
// dfs.getPathTo(5) // -> [ 5, 4, 6, 0 ]
// dfs.getPathTo(3) // -> [ 3, 4, 6, 0 ]
// dfs.getPathTo(0) // -> [ 0 ]
