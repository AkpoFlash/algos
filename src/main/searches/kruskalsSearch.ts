import { Edge, EdgeWeightedGraph, QuickFind } from "../structures";

/**
 * Kruskal's algorithm finds the minimal spanning tree (MST) in undirected edge-weigthed graph
 * 
 * How it's work:
 * - Store all edges by weigth in ascending order (Use minimal queue or sorting)
 * - Take the minimal edge
 * - Check if vertices from minimum edge have connected by MST, skip if connected, connect if aren't
 *   (For cheking connection we could use difference methods (e.g. DFS [O(~V)], BFS [O(~V)], union-find [O(~logV)]))
 * - Repeat until reach V - 1 edges into MST
 */
export class KruskalSearch<T extends string | number | symbol> {
    private _sortedEdges: Edge<T>[];
    public mst: Edge<T>[] = [];
    public totalDistance: number = 0;

    constructor(graph: EdgeWeightedGraph<T>) {
        // sort in descending order for use .pop() method instead of .shift()
        this._sortedEdges = [...graph.edges].sort((a, b) => b.getWeight() - a.getWeight());

        const qf = new QuickFind(graph.vertices);
        while (this._sortedEdges.length && this.mst.length < graph.vertices.length - 1) {
            const edge = this._sortedEdges.pop()!;
            const v = edge.either();
            const w = edge.other(v);

            if (!qf.connected(v, w)) {
                qf.union(v, w);
                this.mst.push(edge);
                this.totalDistance += edge.getWeight();
            }
        }
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

// const mst = new KruskalSearch(graph);
// mst.mst;
// mst.totalDistance; // 1.81
// mst.getMstEdges(); // -> [ 0, 7 ], [ 2, 3 ], [ 1, 7 ], [ 0, 2 ], [ 5, 7 ], [ 4, 5 ], [ 6, 2 ]
