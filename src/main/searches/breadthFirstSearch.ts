import { Digraph, Graph, QueueLinkedList } from "../structures";

/**
 * This breadth-first search (BFS) algorithm make possible to find all reachable verticles and shortest path
 * for ~(E + V) time where E - is number of edges and V is number of verticles
 */
export class BreadthFirstSearch<T extends string | number | symbol> {
    private _marked: Map<T, boolean> = new Map();
    private _edgeTo: Map<T, T | undefined> = new Map();

    constructor(graph: Graph<T> | Digraph<T>, startVerticle: T) {
        this._bfs(graph, startVerticle);
    }

    private _bfs = (graph: Graph<T> | Digraph<T>, verticle: T): void => {
        const queue = new QueueLinkedList<T>();
        queue.enqueue(verticle);
        this._marked.set(verticle, true);

        while (!queue.isEmpty()) {
            const v = queue.dequeue()!;
            const adjacents = graph.adjacent(v) || [];

            for (let i = 0; i < adjacents.length; i++) {
                if (!this._marked.has(adjacents[i])) {
                    queue.enqueue(adjacents[i]);
                    this._edgeTo.set(adjacents[i], v);
                    this._marked.set(adjacents[i], true);
                }
            }
        }
    }

    public hasPathTo = (verticle: T): boolean => {
        return !!this._marked.get(verticle);
    }

    public getPathTo = (verticle: T): T[] | undefined => {
        if (!this.hasPathTo(verticle)) {
            return;
        }

        const path: T[] = [];
        for (let i: T | undefined = verticle; i !== undefined; i = this._edgeTo.get(i)) {
            path.push(i);
        }

        return path;
    }

}

// Example of usage:

const graph = new Graph<number>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 6);
graph.addEdge(6, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 3);
graph.addEdge(4, 5);
graph.addEdge(5, 0);
graph.addEdge(7, 8);
graph.addEdge(9, 10);
graph.addEdge(9, 11);
graph.addEdge(9, 12);
graph.addEdge(11, 12);

const bfs = new BreadthFirstSearch(graph, 0);
bfs.getPathTo(5) // -> [ 5, 0 ]
bfs.getPathTo(3) // -> [ 3, 4, 0 ]
bfs.getPathTo(4) // -> [ 4, 6, 0 ]
bfs.getPathTo(0) // -> [ 0 ]
