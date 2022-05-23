import { DepthFirstOrder } from "../sorts";
import { Digraph } from "./digraph";

export class StrongConnectedComponent<T extends string | number | symbol> {
    private _marked: Map<T, boolean> = new Map();
    private _id: Map<T, number> = new Map();
    private _componentCount = 0;

    constructor(digraph: Digraph<T>) {
        const reversedDigraph = new DepthFirstOrder<T>(digraph.reverse());
        reversedDigraph.topologicalOrder().forEach(verticle => {
            if (!this._marked.has(verticle)) {
                this._dfs(digraph, verticle);
                this._componentCount++;
            }
        })
    }

    private _dfs = (digraph: Digraph<T>, verticle: T): void => {
        this._marked.set(verticle, true);
        this._id.set(verticle, this._componentCount);

        digraph.adjacent(verticle)?.forEach(v => {
            if (!this._marked.get(v)) {
                this._dfs(digraph, v)
            }
        });
    }

    public componentCount = (): number => {
        return this._componentCount;
    }

    public getComponentId = (verticle: T): number | undefined => {
        return this._id.get(verticle);
    }

}

// Example of usage:

// const scc = new StrongConnectedComponent(digraph);

// scc.componentCount(); // -> 5
// scc.getComponentId(0); // -> 1
// scc.getComponentId(1); // -> 0
// scc.getComponentId(2); // -> 1
// scc.getComponentId(3); // -> 1
// scc.getComponentId(4); // -> 1
// scc.getComponentId(5); // -> 1
// scc.getComponentId(6); // -> 3
// scc.getComponentId(7); // -> 4
// scc.getComponentId(8); // -> 3
// scc.getComponentId(9); // -> 2
// scc.getComponentId(10); // -> 2
// scc.getComponentId(11); // -> 2
// scc.getComponentId(12); // -> 2
