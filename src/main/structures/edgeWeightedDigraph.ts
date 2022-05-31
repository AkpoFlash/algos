/**
 * This primitive implementation of edge weighted digraph structure for working with digraph algorithms
 * 
 * This is naive implementation just for mock purposes
 * @constructor receive only distinct values 
 */
export class EdgeWeightedDigraph<T extends string | number | symbol> {
    private adjacentList: Map<T, DirectedEdge<T>[]> = new Map();
    public edges: DirectedEdge<T>[] = [];
    public vertices: T[];

    constructor(vertices: T[]) {
        this.vertices = vertices;
    }

    public addEdge = (edge: DirectedEdge<T>): void => {
        const from = edge.from();
        const prev = this.adjacentList.get(from) || [];
        this.adjacentList.set(from, [...prev, edge]);
        this.edges.push(edge);
    }

    public adjacentEdges = (vertice: T): DirectedEdge<T>[] | undefined => {
        return this.adjacentList.get(vertice);
    }
}


export class DirectedEdge<T> {
    private readonly _from: T;
    private readonly _to: T;
    private readonly weight: number;

    constructor(from: T, to: T, weight: number) {
        this._from = from;
        this._to = to;
        this.weight = weight;
    }

    public from = (): T => {
        return this._from;
    }

    public to = (): T => {
        return this._to;
    }

    public getWeight = (): number => {
        return this.weight;
    }
}

// Example of usage:

// const graph = new EdgeWeightedDigraph<number>([0, 1, 2, 3, 4, 5, 6, 7]);

// graph.addEdge(new DirectedEdge(4, 5, 0.35));
// graph.addEdge(new DirectedEdge(4, 7, 0.37));
// graph.addEdge(new DirectedEdge(5, 7, 0.28));
// graph.addEdge(new DirectedEdge(0, 7, 0.16));
// graph.addEdge(new DirectedEdge(1, 5, 0.32));
// graph.addEdge(new DirectedEdge(0, 4, 0.38));
// graph.addEdge(new DirectedEdge(2, 3, 0.17));
// graph.addEdge(new DirectedEdge(1, 7, 0.19));
// graph.addEdge(new DirectedEdge(0, 2, 0.26));
// graph.addEdge(new DirectedEdge(1, 2, 0.36));
// graph.addEdge(new DirectedEdge(1, 3, 0.29));
// graph.addEdge(new DirectedEdge(2, 7, 0.34));
// graph.addEdge(new DirectedEdge(6, 2, 0.40));
// graph.addEdge(new DirectedEdge(3, 6, 0.52));
// graph.addEdge(new DirectedEdge(6, 0, 0.58));
// graph.addEdge(new DirectedEdge(6, 4, 0.93));
