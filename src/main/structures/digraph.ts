export interface IDigraph<T extends string | number | symbol> {
    addEdge: (verticle1: T, verticle2: T) => void;
    adjacent: (vertice: T) => T[] | undefined;
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
    private adjacentList: Map<T, T[]> = new Map();
    public countOfVertices = 0;
    public vertices: T[] = [];
    public countOfEdges = 0;

    constructor(vertices: T[]) {
        this.vertices = vertices;
        vertices.forEach(item => this.adjacentList.set(item, []));
        this.countOfVertices = vertices.length;
    }

    adjacent = (vertice: T): T[] | undefined => {
        return this.adjacentList.get(vertice);
    }

    addEdge = (verticle1: T, verticle2: T): void => {
        const prev = this.adjacentList.get(verticle1) || [];
        this.adjacentList.set(verticle1, [...prev, verticle2]);
        this.countOfEdges++;
    }

    reverse = (): Digraph<T> => {
        const digraphReversed = new Digraph(this.vertices);

        for (let vertice of this.adjacentList) {
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

// digraph.adjacent(0) // -> [ 1, 2, 6 ]
// digraph.adjacent(1) // -> [ ]
// digraph.adjacent(2) // -> [ ]
// digraph.adjacent(3) // -> [ ]
// digraph.adjacent(4) // -> [ 3, 5 ]
// digraph.adjacent(5) // -> [ 0 ]
// digraph.adjacent(6) // -> [ 4 ]
// digraph.adjacent(7) // -> [ 8 ]
// digraph.adjacent(8) // -> [ ]
// digraph.adjacent(9) // -> [ 10, 11, 12 ]
// digraph.adjacent(10) // -> [ ]
// digraph.adjacent(11) // -> [ 12 ]
// digraph.adjacent(12) // -> [ ]
