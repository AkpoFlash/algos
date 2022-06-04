/**
 * Heap priority queue give us logarithmic (~logN) @method insert and logarithmic (~logN) @method deleteMax
 */
export class PriorityQueueHeap<T> {
    public queue: T[] = [];
    public size = 0;

    private _sink = (index: number): void => {
        const maxIndex = this.size - 1;

        while (index * 2 <= maxIndex) {
            let childIndex = index * 2;

            // check witch of child are bigger, then choose it
            if (childIndex < maxIndex && this.queue[childIndex] < this.queue[childIndex + 1]) {
                childIndex = childIndex + 1;
            }

            // check if the child smaller then new item, then replace them
            if (this.queue[childIndex] <= this.queue[index]) {
                break;
            }

            [this.queue[childIndex], this.queue[index]] = [this.queue[index], this.queue[childIndex]];
            index = childIndex;
        }

    }

    private _swim = (index: number): void => {
        const parentIndex = Math.floor(index / 2);
        if (this.queue[parentIndex] < this.queue[index]) {
            [this.queue[parentIndex], this.queue[index]] = [this.queue[index], this.queue[parentIndex]];
            this._swim(parentIndex);
        }
    }

    public isEmpty = (): boolean => {
        return this.size === 0;
    }

    public insert = (value: T): void => {
        this.queue[this.size] = value;
        this._swim(this.size);
        this.size = this.size + 1;
    }

    public deleteMax = (): T | undefined => {
        if (this.isEmpty()) {
            return;
        }

        const result = this.queue[0];
        this.size = this.size - 1;
        [this.queue[0], this.queue[this.size]] = [this.queue[this.size], this.queue[0]];
        this.queue[this.size] = undefined!;
        this._sink(0);

        return result;
    }
}

// Example of usage:

// const pq = new PriorityQueueHeap<number>();
// pq.insert(1);
// pq.insert(3);
// pq.insert(2);
// pq.deleteMax(); // -> second
// pq.deleteMax(); // -> first
// pq.deleteMax(); // -> third
// pq.deleteMax(); // -> undefined
