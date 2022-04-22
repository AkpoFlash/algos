class QuickUnion {
    // this is array which contain the components IDs
    // (component it is the entity with connected nodes)
    ids: number[] = [];

    constructor(n: number) {
        for (let i = 0; i < n; i++) {
            this.ids[i] = i;
        }
    }

    root(i: number) {
        while (i != this.ids[i]) {
            i = this.ids[i];
        }
        return i;
    }

    connected(a: number, b: number) {
        const rootA = this.root(a);
        const rootB = this.root(b);
        return rootA === rootB;
    }

    union(a: number, b: number) {
        const rootA = this.root(a);
        const rootB = this.root(b);
        this.ids[rootA] = rootB;
    }
}

// Example of usage:

const qu = new QuickUnion(10)
qu.union(1, 2)
console.log(qu.connected(1, 2)) // -> true
qu.union(2, 3)
console.log(qu.connected(3, 4)) // -> false
qu.union(3, 4)
console.log(qu.connected(3, 4)) // -> true
