import { DirectedEdge, EdgeWeightedDigraph } from "../structures";

/**
 * Dijkstra's algorithm finds the minimal spanning tree (MST) in directed edge-weigthed graph
 * 
 * How it's work:
 * - Set all distances to infinity except start vertice which set to zero
 * - Start from 'Start Vertice'
 * - Run over all adjacent edges of this vertice and do relax
 *   (relaxation is method for recalculating distance to vertice)
 * - Repeat until all edges would be relaxing
 */
export class DijkstraSearch<T extends string | number | symbol> {
    private _edgeTo: Map<T, DirectedEdge<T>> = new Map();
    private _adjacentVertices: Map<T, number> = new Map();
    private _distanceTo: Map<T, number> = new Map();

    constructor(graph: EdgeWeightedDigraph<T>, startVertice: T) {
        for (let i = 0; i < graph.vertices.length; i++) {
            this._distanceTo.set(graph.vertices[i], Infinity);
        }
        this._distanceTo.set(startVertice, 0);

        this._adjacentVertices.set(startVertice, 0);
        while (this._adjacentVertices.size) {
            const vertice = this._removeNearestVertice();
            if (vertice !== undefined) {
                const adjacentEdges = graph.adjacentEdges(vertice) || [];
                for (let i = 0; i < adjacentEdges.length; i++) {
                    this._relax(adjacentEdges[i]);
                }
            }

        }
    }

    private _relax = (edge: DirectedEdge<T>): void => {
        const from = edge.from();
        const to = edge.to();

        const distFrom = this._distanceTo.get(from);
        const distTo = this._distanceTo.get(to);

        if (distFrom !== undefined && distTo !== undefined) {
            const distNew = distFrom + edge.getWeight();
            if (distNew < distTo) {
                this._distanceTo.set(to, distNew);
                this._edgeTo.set(to, edge);
                this._adjacentVertices.set(to, distNew);
            }
        }

    }

    private _removeNearestVertice = (): T | undefined => {
        let verticleMin: T | undefined = undefined;
        let verticleWeigth = Infinity;

        for (const [vertice, weigth] of this._adjacentVertices) {
            if (weigth < verticleWeigth) {
                verticleMin = vertice;
            }
        }
        if (verticleMin !== undefined) {
            this._adjacentVertices.delete(verticleMin);
            return verticleMin;
        }
    }

    public getPaths = (): Record<T, [T, T]> => {
        const result = {} as Record<T, [T, T]>;
        for (const [vertice, edge] of this._edgeTo) {
            result[vertice] = [edge.from(), edge.to()];
        }
        return result;
    }

    public getDistance = (): Record<T, number> => {
        const result = {} as Record<T, number>;
        for (const [vertice, weigth] of this._distanceTo) {
            result[vertice] = weigth;
        }
        return result;
    }
}

// Example of usage:

// const graph = new EdgeWeightedDigraph<number>([0, 1, 2, 3, 4, 5, 6, 7]);

// graph.addEdge(new DirectedEdge(0, 1, 5));
// graph.addEdge(new DirectedEdge(0, 4, 9));
// graph.addEdge(new DirectedEdge(0, 7, 8));
// graph.addEdge(new DirectedEdge(1, 2, 12));
// graph.addEdge(new DirectedEdge(1, 3, 15));
// graph.addEdge(new DirectedEdge(1, 7, 4));
// graph.addEdge(new DirectedEdge(2, 3, 3));
// graph.addEdge(new DirectedEdge(2, 6, 11));
// graph.addEdge(new DirectedEdge(3, 6, 9));
// graph.addEdge(new DirectedEdge(4, 5, 4));
// graph.addEdge(new DirectedEdge(4, 6, 20));
// graph.addEdge(new DirectedEdge(4, 7, 5));
// graph.addEdge(new DirectedEdge(5, 2, 1));
// graph.addEdge(new DirectedEdge(5, 6, 13));
// graph.addEdge(new DirectedEdge(7, 5, 6));
// graph.addEdge(new DirectedEdge(7, 2, 7));

// const shortPath = new DijkstraSearch(graph, 0);
// console.log(shortPath.getPaths()); // -> { '1': [0, 1], '2': [5, 2], '3': [2, 3], '4': [0, 4], '5': [4, 5], '6': [2, 6], '7': [0, 7] }
// console.log(shortPath.distanceTo); // -> Map(8) { 0 => 0, 1 => 5, 2 => 14, 3 => 17, 4 => 9, 5 => 13, 6 => 25, 7 => 8 }
