/**
 * Heap priority queue give us logarithmic (~logN) @method insert and logarithmic (~logN) @method deleteMax
 */
export class PriorityQueueHeap<T> {
    queue: T[] = [];
    size = 0;

    private sink = (index: number): void => {
        let current = index;
        let child = index ? current * 2 : 1;

        while (child < this.size) {
            // check witch of child are bigger, then choose it
            if (child < this.size && this.queue[child] < this.queue[child + 1]) {
                child = child + 1;
            }

            // check if the child smaller then new item, then replace them
            if (this.queue[child] < this.queue[current]) {
                break;
            }

            [this.queue[child], this.queue[current]] = [this.queue[current], this.queue[child]];
            current = child;
            child = current * 2;
        }

    }

    private swim = (index: number): void => {
        const parentIndex = Math.floor(index / 2);
        if (this.queue[parentIndex] < this.queue[index]) {
            [this.queue[parentIndex], this.queue[index]] = [this.queue[index], this.queue[parentIndex]];
            this.swim(parentIndex);
        }
    }

    public isEmpty = (): boolean => {
        return this.size === 0;
    }

    public insert = (value: T): void => {
        this.queue[this.size] = value;
        this.swim(this.size);
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
        this.sink(0);

        return result;
    }
}

// Example of usage:

const pq = new PriorityQueueHeap<number>();
pq.insert(1);
pq.insert(3);
pq.insert(2);
console.log(pq.deleteMax()); // -> second
console.log(pq.deleteMax()); // -> first
console.log(pq.deleteMax()); // -> third
console.log(pq.deleteMax()); // -> undefined
