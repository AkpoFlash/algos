/**
 * This primitive implementation of edge weighted graph structure for working with graph alogorithms
 * 
 * This is naive implementation just for mock purposes
 * @constructor receive only distinct values 
 */
export class EdgeWeightedGraph<T extends string | number | symbol> {
    private adjacentList: Map<T, Edge<T>[]> = new Map();
    public edges: Edge<T>[] = [];
    public verticles: T[];

    constructor(verticles: T[]) {
        this.verticles = verticles;
    }

    public addEdge = (edge: Edge<T>): void => {
        const verticle1 = edge.either();
        const verticle2 = edge.other(verticle1);
        const prev1 = this.adjacentList.get(verticle1) || [];
        const prev2 = this.adjacentList.get(verticle2) || [];
        this.adjacentList.set(verticle1, [...prev1, edge]);
        this.adjacentList.set(verticle2, [...prev2, edge]);
        this.edges.push(edge);
    }

    public adjacentEdges = (verticle: T): Edge<T>[] | undefined => {
        return this.adjacentList.get(verticle);
    }
}


export class Edge<T> {
    private readonly v: T;
    private readonly w: T;
    private readonly weight: number;

    constructor(v: T, w: T, weight: number) {
        this.v = v;
        this.w = w;
        this.weight = weight;
    }

    public either = (): T => {
        return this.v;
    }

    public other = (v: T): T => {
        if (this.v === v) {
            return this.w;
        }
        return this.v;
    }

    public getWeight = (): number => {
        return this.weight;
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

