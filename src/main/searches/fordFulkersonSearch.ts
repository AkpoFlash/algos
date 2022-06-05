import { FlowEdge, FlowGraph, QueueArray } from "../structures";

/**
 * Ford-Fulkerson algorithm make possible to find the max flow from start (source) vertex to end (target) vertex
 * 
 * You should keep in mind that max flow === min cut
 */
export class FordFulkersonSearch<T extends string | number | symbol> {
    private _visited: Map<T, boolean> = new Map();
    private _edgeTo: Map<T, FlowEdge<T>> = new Map();
    private _flow: number = 0;

    constructor(graph: FlowGraph<T>, startVertice: T, targetVertice: T) {
        while (this._addArgumentingPath(graph, startVertice, targetVertice)) {
            let bottle = Infinity;

            for (let vertice = targetVertice; vertice != startVertice; vertice = this._edgeTo.get(vertice)!.other(vertice)) {
                bottle = Math.min(bottle, this._edgeTo.get(vertice)!.residualCapacityTo(vertice));
            }

            for (let vertice = targetVertice; vertice != startVertice; vertice = this._edgeTo.get(vertice)!.other(vertice)) {
                this._edgeTo.get(vertice)?.addResidualFlowTo(vertice, bottle);
            }

            this._flow += bottle;
        }
    }

    private _addArgumentingPath = (graph: FlowGraph<T>, startVertice: T, targetVertice: T): boolean => {
        const queue = new QueueArray<T>();
        queue.enqueue(startVertice);

        this._visited = new Map();
        this._visited.set(startVertice, true);

        while (!queue.isEmpty()) {
            const vertice = queue.dequeue()!;

            const adjecentEdges = graph.adjacentEdges(vertice) || [];
            for (let i = 0; i < adjecentEdges.length; i++) {
                const edge = adjecentEdges[i];
                const other = edge.other(vertice);
                if (edge.residualCapacityTo(other) > 0 && !this._visited.get(other)) {
                    this._edgeTo.set(other, edge);
                    this._visited.set(other, true);
                    queue.enqueue(other);
                }

            }
        }

        return !!this._visited.get(targetVertice);
    }

    public getFlow = (): number => {
        return this._flow;
    }
}

// Example of usage:

// const graph = new FlowGraph<number>([0, 1, 2, 3, 4, 5, 6, 7]);

// graph.addEdge(new FlowEdge(0, 1, 10));
// graph.addEdge(new FlowEdge(0, 2, 5));
// graph.addEdge(new FlowEdge(0, 3, 15));
// graph.addEdge(new FlowEdge(1, 2, 4));
// graph.addEdge(new FlowEdge(1, 4, 9));
// graph.addEdge(new FlowEdge(1, 5, 15));
// graph.addEdge(new FlowEdge(2, 3, 4));
// graph.addEdge(new FlowEdge(2, 5, 8));
// graph.addEdge(new FlowEdge(3, 6, 16));
// graph.addEdge(new FlowEdge(4, 5, 15));
// graph.addEdge(new FlowEdge(4, 7, 10));
// graph.addEdge(new FlowEdge(5, 6, 15));
// graph.addEdge(new FlowEdge(5, 7, 10));
// graph.addEdge(new FlowEdge(6, 2, 6));
// graph.addEdge(new FlowEdge(6, 7, 10));

// const maxFlow = new FordFulkersonSearch(graph, 0, 7);
// maxFlow.getFlow(); // -> 28
