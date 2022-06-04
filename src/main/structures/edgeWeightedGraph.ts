/**
 * This primitive implementation of edge weighted graph structure for working with graph algorithms
 * 
 * This is naive implementation just for mock purposes
 * @constructor receive only distinct values 
 */
export class EdgeWeightedGraph<T extends string | number | symbol> {
    private _adjacentList: Map<T, Edge<T>[]> = new Map();
    public edges: Edge<T>[] = [];
    public vertices: T[];

    constructor(vertices: T[]) {
        this.vertices = vertices;
    }

    public addEdge = (edge: Edge<T>): void => {
        const vertice1 = edge.either();
        const vertice2 = edge.other(vertice1);
        const prev1 = this._adjacentList.get(vertice1) || [];
        const prev2 = this._adjacentList.get(vertice2) || [];
        this._adjacentList.set(vertice1, [...prev1, edge]);
        this._adjacentList.set(vertice2, [...prev2, edge]);
        this.edges.push(edge);
    }

    public adjacentEdges = (vertice: T): Edge<T>[] | undefined => {
        return this._adjacentList.get(vertice);
    }

    public adjacentVertices = (vertice: T): T[] | undefined => {
        const edges = this._adjacentList.get(vertice);
        return edges?.map(edge => edge.other(vertice));
    }
}


export class Edge<T> {
    private readonly _v: T;
    private readonly _w: T;
    private readonly _weight: number;

    constructor(v: T, w: T, weight: number) {
        this._v = v;
        this._w = w;
        this._weight = weight;
    }

    public either = (): T => {
        return this._v;
    }

    public other = (v: T): T => {
        if (this._v === v) {
            return this._w;
        }
        return this._v;
    }

    public getWeight = (): number => {
        return this._weight;
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

