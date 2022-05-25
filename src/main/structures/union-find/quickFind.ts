export class QuickFind<T extends string | number | symbol> {
    // this is array which contain the components IDs
    // (component it is the entity with connected nodes)
    private _ids: Map<T, number> = new Map();
    private _values: T[];

    constructor(values: T[]) {
        this._values = values;
        for (let i = 0; i < values.length; i++) {
            this._ids.set(values[i], i);
        }
    }

    public connected(a: T, b: T): boolean {
        // if IDs of components are matched then they are connected
        return this._ids.get(a) !== undefined && this._ids.get(a) === this._ids.get(b);
    }

    public union(a: T, b: T): void {
        const ida = this._ids.get(a);
        const idb = this._ids.get(b);

        if (ida === undefined || idb === undefined) {
            return;
        }

        if (this.connected(a, b)) {
            return;
        }

        for (let i = 0; i < this._values.length; i++) {
            // here is we change all ID from first component (A) to the second (B), becouse now they connected
            if (this._ids.get(this._values[i]) === ida) {
                this._ids.set(this._values[i], idb);
            }
        }
    }
}

// Example of usage:

const qf = new QuickFind([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
qf.union(1, 2);
qf.connected(1, 2); // -> true
qf.union(2, 3);
qf.connected(3, 4); // -> false
qf.union(3, 4)
qf.connected(3, 4); // -> true
