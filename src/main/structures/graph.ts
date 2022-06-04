export interface IGraph<T> {
    addEdge: (vertice1: T, vertice2: T) => void;
    adjacentVertices: (vertice: T) => T[] | undefined;
    vertices: T[];
    countOfVertices: number;
    countOfEdges: number;
}

/**
 * This primitive implementation of graph structure for working with graph algorithms
 * 
 * This is naive implementation just for mock purposes
 * @constructor receive only distinct values 
 * @field countOfVertices count duplicated vertices and all empty init array values
 * @method addEdge pass duplicate edges
 * @field countOfEdges count duplicated edges
 */
export class Graph<T extends string | number | symbol> implements IGraph<T> {
    private adjacentList: Map<T, T[]> = new Map();
    public countOfVertices = 0;
    public vertices: T[] = [];
    public countOfEdges = 0;

    constructor(vertices: T[]) {
        this.vertices = vertices;
        vertices.forEach(item => this.adjacentList.set(item, []));
        this.countOfVertices = vertices.length;
    }

    adjacentVertices = (vertice: T): T[] | undefined => {
        return this.adjacentList.get(vertice);
    }

    addEdge = (vertice1: T, vertice2: T): void => {
        const prev1 = this.adjacentList.get(vertice1) || [];
        const prev2 = this.adjacentList.get(vertice2) || [];
        this.adjacentList.set(vertice1, [...prev1, vertice2]);
        this.adjacentList.set(vertice2, [...prev2, vertice1]);
        this.countOfEdges++;
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
// graph.addEdge(7, 8);
// graph.addEdge(9, 10);
// graph.addEdge(9, 11);
// graph.addEdge(9, 12);
// graph.addEdge(11, 12);

// graph.adjacentVertices(0) // -> [ 1, 2, 6, 5 ]
// graph.adjacentVertices(1) // -> [ 0 ]
// graph.adjacentVertices(2) // -> [ 0 ]
// graph.adjacentVertices(3) // -> [ 4 ]
// graph.adjacentVertices(4) // -> [ 6, 3, 5 ]
// graph.adjacentVertices(5) // -> [ 4, 0 ]
// graph.adjacentVertices(6) // -> [ 0, 4 ]
// graph.adjacentVertices(7) // -> [ 8 ]
// graph.adjacentVertices(8) // -> [ 7 ]
// graph.adjacentVertices(9) // -> [ 10, 11, 12 ]
// graph.adjacentVertices(10) // -> [ 9 ]
// graph.adjacentVertices(11) // -> [ 9, 12 ]
// graph.adjacentVertices(12) // -> [ 9, 11 ]
