export interface IGraph<T> {
    addEdge: (verticle1: T, verticle2: T) => void;
    adjacent: (verticle: T) => T[];
    countOfVerticles: number;
    countOfEdges: number;
}

/**
 * This primitive implementation of graph structure for working with graph alogorithms
 * 
 * This is naive implementation just for mock purposes
 * @constructor receive only distinct values 
 * @field countOfVerticles count duplicated verticles and all empty init array values
 * @method addEdge pass duplicate edges
 * @field countOfEdges count duplicated edges
 */
export class Graph<T extends string | number | symbol> implements IGraph<T> {
    private adjacentList: Record<T, T[]>;
    public countOfVerticles = 0;
    public countOfEdges = 0;

    constructor(verticles: T[]) {
        let adjacentList: Record<T, T[]> = {} as Record<T, T[]>;
        verticles.forEach(item => adjacentList[item] = []);
        this.adjacentList = adjacentList;
        this.countOfVerticles = verticles.length;
    }

    adjacent = (verticle: T): T[] => {
        return this.adjacentList[verticle]
    }

    addEdge = (verticle1: T, verticle2: T): void => {
        this.adjacentList[verticle1].push(verticle2);
        this.adjacentList[verticle2].push(verticle1);
        this.countOfEdges++;
    }
}

// Example of usage:

const graph = new Graph<number>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 6);
graph.addEdge(6, 4);
graph.addEdge(4, 3);
graph.addEdge(4, 5);
graph.addEdge(5, 0);
graph.addEdge(7, 8);
graph.addEdge(9, 10);
graph.addEdge(9, 11);
graph.addEdge(9, 12);
graph.addEdge(11, 12);

console.log(graph.adjacent(0));
console.log(graph.adjacent(1));
console.log(graph.adjacent(2));
console.log(graph.adjacent(3));
console.log(graph.adjacent(4));
console.log(graph.adjacent(5));
console.log(graph.adjacent(6));
console.log(graph.adjacent(7));
console.log(graph.adjacent(8));
console.log(graph.adjacent(9));
console.log(graph.adjacent(10));
console.log(graph.adjacent(11));
console.log(graph.adjacent(12));
