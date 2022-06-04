export interface IDigraph<T extends string | number | symbol> {
    addEdge: (verticle1: T, verticle2: T) => void;
    adjacentVertices: (vertice: T) => T[] | undefined;
    vertices: T[];
    countOfVertices: number;
    countOfEdges: number;
    reverse: () => Digraph<T>;
}

/**
 * This primitive implementation of digraph structure
 * 
 * This is naive implementation just for mock purposes
 * @constructor receive only distinct values 
 * @field countOfVertices count duplicated vertices and all empty init array values
 * @method addEdge pass duplicate edges
 * @field countOfEdges count duplicated edges
 */
export class Digraph<T extends string | number | symbol> implements IDigraph<T> {
    private _adjacentList: Map<T, T[]> = new Map();
    public countOfVertices = 0;
    public vertices: T[] = [];
    public countOfEdges = 0;

    constructor(vertices: T[]) {
        this.vertices = vertices;
        vertices.forEach(item => this._adjacentList.set(item, []));
        this.countOfVertices = vertices.length;
    }

    public adjacentVertices = (vertice: T): T[] | undefined => {
        return this._adjacentList.get(vertice);
    }

    public addEdge = (verticle1: T, verticle2: T): void => {
        const prev = this._adjacentList.get(verticle1) || [];
        this._adjacentList.set(verticle1, [...prev, verticle2]);
        this.countOfEdges++;
    }

    public reverse = (): Digraph<T> => {
        const digraphReversed = new Digraph(this.vertices);

        for (let vertice of this._adjacentList) {
            vertice[1].forEach(adjacent => digraphReversed.addEdge(adjacent, vertice[0]));
        }

        return digraphReversed;
    }
}

// Example of usage:

// const digraph = new Digraph<number>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

// digraph.addEdge(0, 1);
// digraph.addEdge(0, 2);
// digraph.addEdge(0, 6);
// digraph.addEdge(6, 4);
// digraph.addEdge(4, 3);
// digraph.addEdge(4, 5);
// digraph.addEdge(5, 0);
// digraph.addEdge(7, 8);
// digraph.addEdge(9, 10);
// digraph.addEdge(9, 11);
// digraph.addEdge(9, 12);
// digraph.addEdge(11, 12);

// digraph.adjacentVertices(0) // -> [ 1, 2, 6 ]
// digraph.adjacentVertices(1) // -> [ ]
// digraph.adjacentVertices(2) // -> [ ]
// digraph.adjacentVertices(3) // -> [ ]
// digraph.adjacentVertices(4) // -> [ 3, 5 ]
// digraph.adjacentVertices(5) // -> [ 0 ]
// digraph.adjacentVertices(6) // -> [ 4 ]
// digraph.adjacentVertices(7) // -> [ 8 ]
// digraph.adjacentVertices(8) // -> [ ]
// digraph.adjacentVertices(9) // -> [ 10, 11, 12 ]
// digraph.adjacentVertices(10) // -> [ ]
// digraph.adjacentVertices(11) // -> [ 12 ]
// digraph.adjacentVertices(12) // -> [ ]
