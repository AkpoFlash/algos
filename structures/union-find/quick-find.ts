class QuickFind {
    // this is array which contain the components IDs
    // (component it is the entity with connected nodes)
    ids: number[] = [];

    constructor(n: number) {
        for (let i = 0; i < n; i++) {
            this.ids[i] = i;
        }
    }

    connected(a: number, b: number) {
        // if IDs of components are matched then they are connected
        return this.ids[a] === this.ids[b];
    }

    union(a: number, b: number) {
        const ida = this.ids[a];
        const idb = this.ids[b];

        if(this.connected(a, b)){
            return;
        }

        for(let i = 0; i < this.ids.length; i++){
            // here is we change all ID from first component (A) to the second (B), becouse now they connected
            if(this.ids[i] === ida){
                this.ids[i] = idb;
            }
        }
    }
}

// Example of usage:

const qf = new QuickFind(10)
qf.union(1, 2)
console.log(qf.connected(1, 2)) // -> true
qf.union(2, 3)
console.log(qf.connected(3, 4)) // -> false
qf.union(3, 4)
console.log(qf.connected(3, 4)) // -> true
