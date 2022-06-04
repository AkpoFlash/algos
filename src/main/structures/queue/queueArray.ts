export class QueueArray<T> {
    public queue: (T | undefined)[] = [];
    private _lo = 0;
    private _hi = 0;

    public isEmpty(): boolean {
        return this._hi - this._lo === 0;
    }

    public enqueue(item: T): void {
        this.queue[this._hi++] = item;
    }

    public dequeue(): T | undefined {
        if (this.isEmpty()) {
            return;
        }

        const item = this.queue[this._lo];
        this.queue[this._lo++] = undefined;

        this._simpleRebalanceArray();

        return item;
    }

    private _simpleRebalanceArray(): void {
        if (this._hi - this._lo === 0) {
            this._lo = 0;
            this._hi = 0;
            this.queue = [];
        }
    }
}

// Example of usage:

// const queue = new QueueArray<number>();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.dequeue(); // -> 1
// queue.dequeue(); // -> 2
// queue.dequeue(); // -> undefined
// queue.enqueue(3);
// queue.dequeue(); // -> 3
