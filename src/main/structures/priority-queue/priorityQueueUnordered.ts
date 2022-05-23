/**
 * Unordered priority queue give us constant (~1) @method insert and linear (~N) @method deleteMax
 */
export class PriorityQueueUnordered<T> {
    queue: T[] = [];
    size = 0;

    public isEmpty = (): boolean => {
        return this.size === 0;
    }

    public insert = (value: T): void => {
        this.queue[this.size++] = value;
    }

    public deleteMax = (): T | undefined => {
        if (this.isEmpty()) {
            return;
        }

        let maxIndex = 0;
        for (let i = 0; i < this.size; i++) {
            if (this.queue[maxIndex] < this.queue[i]) {
                maxIndex = i;
            }
        }
        const result = this.queue[maxIndex];
        this.size = this.size - 1;
        [this.queue[maxIndex], this.queue[this.size]] = [this.queue[this.size], this.queue[maxIndex]];
        this.queue[this.size] = undefined!;

        return result;
    }
}

// Example of usage:

// const pq = new PriorityQueueUnordered<number>();
// pq.insert(1);
// pq.insert(3);
// pq.insert(2);
// pq.deleteMax(); // -> second
// pq.deleteMax(); // -> first
// pq.deleteMax(); // -> third
// pq.deleteMax(); // -> undefined
