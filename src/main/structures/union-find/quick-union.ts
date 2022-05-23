export class QuickUnion {
    // this is array which contain the components IDs
    // (component it is the entity with connected nodes)
    ids: number[] = [];
    size: number[] = [];

    constructor(n: number) {
        for (let i = 0; i < n; i++) {
            this.ids[i] = i;
            this.size[i] = 0;
        }
    }

    root(i: number): number {
        while (i != this.ids[i]) {
            // here is the interesting trick
            // the line below compress the tree and maintained the smallest possible tree
            this.ids[i] = this.ids[this.ids[i]];
            i = this.ids[i];
        }
        return i;
    }

    connected(a: number, b: number): boolean {
        const rootA = this.root(a);
        const rootB = this.root(b);
        return rootA === rootB;
    }

    union(a: number, b: number): void {
        const rootA = this.root(a);
        const rootB = this.root(b);

        // simple solution just assign new root
        // `this.ids[rootB] = rootA;`
        // but more clever solution check the size of trees and merge the small one to the big one
        if (this.size[rootA] > this.size[rootB]) {
            this.ids[rootB] = rootA;
            this.size[rootA] += this.size[rootB];
        }
        else {
            this.ids[rootA] = rootB;
            this.size[rootB] += this.size[rootA];
        }
    }
}

// Example of usage:

// const qu = new QuickUnion(10);
// qu.union(1, 2);
// qu.connected(1, 2); // -> true
// qu.union(2, 3);
// qu.connected(3, 4); // -> false
// qu.union(3, 4);
// qu.connected(3, 4); // -> true
