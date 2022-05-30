export interface IGraph<T> {
    addEdge: (verticle1: T, verticle2: T) => void;
    adjacent: (verticle: T) => T[] | undefined;
    verticles: T[];
    countOfVerticles: number;
    countOfEdges: number;
}

/**
 * This primitive implementation of graph structure for working with graph algorithms
 * 
 * This is naive implementation just for mock purposes
 * @constructor receive only distinct values 
 * @field countOfVerticles count duplicated verticles and all empty init array values
 * @method addEdge pass duplicate edges
 * @field countOfEdges count duplicated edges
 */
export class Graph<T extends string | number | symbol> implements IGraph<T> {
    private adjacentList: Map<T, T[]> = new Map();
    public countOfVerticles = 0;
    public verticles: T[] = [];
    public countOfEdges = 0;

    constructor(verticles: T[]) {
        this.verticles = verticles;
        verticles.forEach(item => this.adjacentList.set(item, []));
        this.countOfVerticles = verticles.length;
    }

    adjacent = (verticle: T): T[] | undefined => {
        return this.adjacentList.get(verticle);
    }

    addEdge = (verticle1: T, verticle2: T): void => {
        const prev1 = this.adjacentList.get(verticle1) || [];
        const prev2 = this.adjacentList.get(verticle2) || [];
        this.adjacentList.set(verticle1, [...prev1, verticle2]);
        this.adjacentList.set(verticle2, [...prev2, verticle1]);
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

// graph.adjacent(0) // -> [ 1, 2, 6, 5 ]
// graph.adjacent(1) // -> [ 0 ]
// graph.adjacent(2) // -> [ 0 ]
// graph.adjacent(3) // -> [ 4 ]
// graph.adjacent(4) // -> [ 6, 3, 5 ]
// graph.adjacent(5) // -> [ 4, 0 ]
// graph.adjacent(6) // -> [ 0, 4 ]
// graph.adjacent(7) // -> [ 8 ]
// graph.adjacent(8) // -> [ 7 ]
// graph.adjacent(9) // -> [ 10, 11, 12 ]
// graph.adjacent(10) // -> [ 9 ]
// graph.adjacent(11) // -> [ 9, 12 ]
// graph.adjacent(12) // -> [ 9, 11 ]
