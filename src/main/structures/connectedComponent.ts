import { Graph } from "./graph";

export class ConnectedComponent<T extends string | number | symbol> {
    private _marked: Map<T, boolean> = new Map();
    private _id: Map<T, number> = new Map();
    private _componentCount = 0;

    constructor(graph: Graph<T>) {
        graph.vertices.forEach(vertice => {
            if (!this._marked.has(vertice)) {
                this._dfs(graph, vertice);
                this._componentCount++;
            }
        })
    }

    private _dfs = (graph: Graph<T>, vertice: T): void => {
        this._marked.set(vertice, true);
        this._id.set(vertice, this._componentCount);

        graph.adjacentVertices(vertice)?.forEach(v => {
            if (!this._marked.get(v)) {
                this._dfs(graph, v)
            }
        });
    }

    public componentCount = (): number => {
        return this._componentCount;
    }

    public getComponentId = (vertice: T): number | undefined => {
        return this._id.get(vertice);
    }

}

// Example of usage:

// const graph = new Graph<number>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

// graph.addEdge(0, 1);
// graph.addEdge(0, 2);
// graph.addEdge(0, 6);
// graph.addEdge(6, 4);
// graph.addEdge(4, 3);
// graph.addEdge(4, 5);
// graph.addEdge(5, 0);
// graph.addEdge(5, 3);
// graph.addEdge(7, 8);
// graph.addEdge(9, 10);
// graph.addEdge(9, 11);
// graph.addEdge(9, 12);
// graph.addEdge(11, 12);

// const cc = new ConnectedComponent(graph);

// cc.componentCount(); // -> 3
// cc.getComponentId(0); // -> 0
// cc.getComponentId(5); // -> 0
// cc.getComponentId(7); // -> 1
// cc.getComponentId(9); // -> 2
// cc.getComponentId(11); // -> 2
