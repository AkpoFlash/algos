import { Graph } from "../structures";

/**
 * This depth-first search (DFS) algorithm make possible to find all reachable verticles for ~(E + V) time
 * where E - is number of edges and V is number of verticles
 */
export const depthFirstSearch = <T extends string | number | symbol>(graph: Graph<T>, startVerticle: T): void => {
    const marked: Map<T, boolean> = new Map();

    const dfs = (graph: Graph<T>, verticle: T) => {
        const adjacent = graph.adjacent(verticle);
        marked.set(verticle, true);
        for (let i = 0; i < adjacent.length; i++) {
            if (!marked.has(adjacent[i])) {
                dfs(graph, adjacent[i]);
                marked.set(adjacent[i], true);
            }
        }
    }

    dfs(graph, startVerticle);
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

depthFirstSearch(graph, 0);
