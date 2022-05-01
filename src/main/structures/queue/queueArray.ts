export class QueueArray<T> {
    queue: (T | undefined)[] = [];
    lo = 0;
    hi = 0;

    public isEmpty(): boolean {
        return this.hi - this.lo === 0;
    }

    public enqueue(item: T): void {
        this.queue[this.hi++] = item;
    }

    public dequeue(): T | undefined {
        if (this.isEmpty()) {
            return;
        }

        const item = this.queue[this.lo];
        this.queue[this.lo++] = undefined;

        this.simpleRebalanceArray();

        return item;
    }

    private simpleRebalanceArray(): void {
        if (this.hi - this.lo === 0) {
            this.lo = 0;
            this.hi = 0;
            this.queue = [];
        }
    }
}

// Example of usage:

const queue = new QueueArray<number>();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // -> 1
console.log(queue.dequeue()); // -> 2
console.log(queue.dequeue()); // -> undefined
queue.enqueue(3);
console.log(queue.dequeue()); // -> 3
