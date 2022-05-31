import { Digraph, Graph } from "../structures";

export class DepthFirstOrder<T extends string | number | symbol> {
    private _marked: Map<T, boolean> = new Map();
    private _reverseOrder: T[] = [];

    constructor(graph: Graph<T> | Digraph<T>) {
        const vertices = graph.vertices;
        for (let i = 0; i < vertices.length; i++) {
            if (!this._marked.has(vertices[i])) {
                this._dfs(graph, vertices[i]);
            }
        }
    }

    private _dfs = (graph: Graph<T> | Digraph<T>, vertice: T): void => {
        const adjacent = graph.adjacent(vertice) || [];
        this._marked.set(vertice, true);

        for (let i = 0; i < adjacent.length; i++) {
            if (!this._marked.has(adjacent[i])) {
                this._dfs(graph, adjacent[i]);
            }
        }
        this._reverseOrder.push(vertice);
    }

    public reverseOrder = (): T[] => {
        return this._reverseOrder;
    }

    public topologicalOrder = (): T[] => {
        const topologicalOrder: T[] = [];
        for (let i = this._reverseOrder.length - 1; i >= 0; i--) {
            topologicalOrder.push(this._reverseOrder[i]);
        }
        return topologicalOrder;
    }
}

// Example of usage:

// const digraph = new Digraph<number>([0, 1, 2, 3, 4, 5, 6]);

// digraph.addEdge(0, 1);
// digraph.addEdge(0, 2);
// digraph.addEdge(0, 5);
// digraph.addEdge(1, 4);
// digraph.addEdge(3, 2);
// digraph.addEdge(3, 4);
// digraph.addEdge(3, 5);
// digraph.addEdge(3, 6);
// digraph.addEdge(5, 2);
// digraph.addEdge(6, 0);
// digraph.addEdge(6, 4);

// const dfo = new DepthFirstOrder(digraph);
// dfo.reverseOrder() // -> [ 4, 1, 2, 5, 0, 6, 3 ]
// dfo.topologicalOrder() // -> [ 3, 6, 0, 5, 2, 1, 4 ]
