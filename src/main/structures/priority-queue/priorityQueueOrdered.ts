/**
 * Ordered priority queue give us linear (~N) @method insert and constant (~1) @method deleteMax
 */
export class PriorityQueueOrdered<T> {
    queue: T[] = [];
    size = 0;

    public isEmpty = (): boolean => {
        return this.size === 0;
    }

    public insert = (value: T): void => {
        this.queue[this.size] = value;
        for (let i = this.size; i > 0 && this.queue[i] < this.queue[i - 1]; i--) {
            [this.queue[i], this.queue[i - 1]] = [this.queue[i - 1], this.queue[i]];
        }
        this.size = this.size + 1;
    }

    public deleteMax = (): T | undefined => {
        if (this.isEmpty()) {
            return;
        }

        return this.queue[--this.size];
    }
}

// Example of usage:

const pq = new PriorityQueueOrdered<number>();
pq.insert(1);
pq.insert(3);
pq.insert(2);
console.log(pq.deleteMax()); // -> second
console.log(pq.deleteMax()); // -> first
console.log(pq.deleteMax()); // -> third
console.log(pq.deleteMax()); // -> undefined
