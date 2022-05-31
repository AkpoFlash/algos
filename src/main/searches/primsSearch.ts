import { Edge, EdgeWeightedGraph } from "../structures";

/**
 * Prim's algorithm finds the minimal spanning tree (MST) in undirected edge-weigthed graph
 * 
 * How it's work:
 * - Take any vertice
 * - Take the minimal adjecent edge
 * - Check if vertices from minimum edge had been visited already, skip if vissited, visit if aren't
 *   (For cheking connection we could use difference methods (e.g. DFS [O(~V)], BFS [O(~V)], union-find [O(~logV)]))
 * - Repeat until reach V - 1 edges into MST
 */
export class PrimSearch<T extends string | number | symbol> {
    // tip: instead of using unsorted array and get (~(E*V))
    // we may use IndexedMinQueue (priority queue (heap) with possibility to change the order) and get (~(E*logV))
    private _unsortedAdjacentEdges: Edge<T>[] = [];
    private _visited: Map<T, boolean> = new Map();
    public mst: Edge<T>[] = [];
    public totalDistance: number = 0;

    constructor(graph: EdgeWeightedGraph<T>) {
        const adjacentEdges = graph.adjacentEdges(graph.vertices[0]);

        this._visitVertice(graph, graph.vertices[0]);

        while (adjacentEdges?.length && this.mst.length < graph.vertices.length - 1) {
            const edge = this._removeMinimunEdge();

            if (edge) {
                const v = edge.either();
                const w = edge.other(v);

                if (!this._visited.get(v) || !this._visited.get(w)) {
                    this.mst.push(edge);
                    this.totalDistance += edge.getWeight();
                    if (!this._visited.get(v)) {
                        this._visitVertice(graph, v);
                    }
                    if (!this._visited.get(w)) {
                        this._visitVertice(graph, w);
                    }
                }
            }
        }

    }

    private _removeMinimunEdge = (): Edge<T> | undefined => {
        const len = this._unsortedAdjacentEdges.length;
        let indexMin = 0;

        for (let i = 0; i < len; i++) {
            if (this._unsortedAdjacentEdges[i].getWeight() < this._unsortedAdjacentEdges[indexMin].getWeight()) {
                indexMin = i;
            }
        }

        [this._unsortedAdjacentEdges[indexMin], this._unsortedAdjacentEdges[len - 1]] = [this._unsortedAdjacentEdges[len - 1], this._unsortedAdjacentEdges[indexMin]];

        return this._unsortedAdjacentEdges.pop();
    }

    private _visitVertice = (graph: EdgeWeightedGraph<T>, vertice: T): void => {
        this._visited.set(vertice, true);

        graph.adjacentEdges(vertice)?.forEach(edge => {
            if (!this._visited.get(edge.other(vertice))) {
                this._unsortedAdjacentEdges.push(edge);
            }
        })
    }

    public getMstEdges = (): [T, T][] => {
        return this.mst.map(edge => {
            const v = edge.either();
            const w = edge.other(v);
            return [v, w];
        });
    }
}

// Example of usage:

// const graph = new EdgeWeightedGraph<number>([0, 1, 2, 3, 4, 5, 6, 7]);

// graph.addEdge(new Edge(4, 5, 0.35));
// graph.addEdge(new Edge(4, 7, 0.37));
// graph.addEdge(new Edge(5, 7, 0.28));
// graph.addEdge(new Edge(0, 7, 0.16));
// graph.addEdge(new Edge(1, 5, 0.32));
// graph.addEdge(new Edge(0, 4, 0.38));
// graph.addEdge(new Edge(2, 3, 0.17));
// graph.addEdge(new Edge(1, 7, 0.19));
// graph.addEdge(new Edge(0, 2, 0.26));
// graph.addEdge(new Edge(1, 2, 0.36));
// graph.addEdge(new Edge(1, 3, 0.29));
// graph.addEdge(new Edge(2, 7, 0.34));
// graph.addEdge(new Edge(6, 2, 0.40));
// graph.addEdge(new Edge(3, 6, 0.52));
// graph.addEdge(new Edge(6, 0, 0.58));
// graph.addEdge(new Edge(6, 4, 0.93));

// const mst = new PrimSearch(graph);
// mst.mst;
// mst.totalDistance; // 1.81
// mst.getMstEdges(); // -> [ 0, 7 ], [ 2, 3 ], [ 1, 7 ], [ 0, 2 ], [ 5, 7 ], [ 4, 5 ], [ 6, 2 ]
