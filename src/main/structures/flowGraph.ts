/**
 * This primitive implementation of flow graph (Flow network)
 * 
 * This is naive implementation just for mock purposes
 * @constructor receive only distinct values 
 */
export class FlowGraph<T extends string | number | symbol> {
    private _adjacentList: Map<T, FlowEdge<T>[]> = new Map();
    public edges: FlowEdge<T>[] = [];
    public vertices: T[];

    constructor(vertices: T[]) {
        this.vertices = vertices;
    }

    public addEdge = (edge: FlowEdge<T>): void => {
        const from = edge.from();
        const to = edge.to();
        const prev1 = this._adjacentList.get(from) || [];
        const prev2 = this._adjacentList.get(to) || [];
        this._adjacentList.set(from, [...prev1, edge]);
        this._adjacentList.set(to, [...prev2, edge]);
        this.edges.push(edge);
    }

    public adjacentEdges = (vertice: T): FlowEdge<T>[] | undefined => {
        return this._adjacentList.get(vertice);
    }

    public adjacentVertices = (vertice: T): T[] | undefined => {
        const edges = this._adjacentList.get(vertice);
        return edges?.map(edge => edge.other(vertice));
    }
}


export class FlowEdge<T> {
    private readonly _from: T;
    private readonly _to: T;
    private readonly _capacity: number;
    private _flow: number = 0;

    constructor(from: T, to: T, capacity: number) {
        this._from = from;
        this._to = to;
        this._capacity = capacity;
    }

    public from = (): T => {
        return this._from;
    }

    public to = (): T => {
        return this._to;
    }

    public other = (vertice: T): T => {
        if (this._from === vertice) {
            return this._to;
        }
        return this._from;
    }

    public getCapacity = (): number => {
        return this._capacity;
    }

    public getFlow = (): number => {
        return this._flow;
    }

    public residualCapacityTo = (vertice: T): number => {
        if (vertice === this._from) {
            return this._flow;
        }
        return this._capacity - this._flow;
    }

    public addResidualFlowTo = (vertice: T, delta: number): void => {
        if (this._from === vertice) {
            this._flow -= delta;
        }
        else {
            this._flow += delta;
        }
    }
}

// Example of usage:

// const graph = new FlowGraph<number>([0, 1, 2, 3, 4, 5, 6, 7]);

// graph.addEdge(new FlowEdge(4, 5, 0.35));
// graph.addEdge(new FlowEdge(4, 7, 0.37));
// graph.addEdge(new FlowEdge(5, 7, 0.28));
// graph.addEdge(new FlowEdge(0, 7, 0.16));
// graph.addEdge(new FlowEdge(1, 5, 0.32));
// graph.addEdge(new FlowEdge(0, 4, 0.38));
// graph.addEdge(new FlowEdge(2, 3, 0.17));
// graph.addEdge(new FlowEdge(1, 7, 0.19));
// graph.addEdge(new FlowEdge(0, 2, 0.26));
// graph.addEdge(new FlowEdge(1, 2, 0.36));
// graph.addEdge(new FlowEdge(1, 3, 0.29));
// graph.addEdge(new FlowEdge(2, 7, 0.34));
// graph.addEdge(new FlowEdge(6, 2, 0.40));
// graph.addEdge(new FlowEdge(3, 6, 0.52));
// graph.addEdge(new FlowEdge(6, 0, 0.58));
// graph.addEdge(new FlowEdge(6, 4, 0.93));
