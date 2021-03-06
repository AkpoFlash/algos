import { Maybe } from '../../types';

export class QueueLinkedList<T> {
    first: Maybe<Item<T>>;
    last: Maybe<Item<T>>;

    public isEmpty(): boolean {
        return !this.first;
    }

    public enqueue(item: T): void {
        const oldItem = this.last ?? {} as Item<T>;
        this.last = { item, next: null };
        if (this.isEmpty()) {
            this.first = this.last;
        }
        else {
            oldItem.next = this.last;
        }
    }

    public dequeue(): T | undefined {
        const item = this.first?.item;
        this.first = this.first?.next;
        if (this.isEmpty()) {
            this.last = null;
        }
        return item;
    }
}

type Item<T> = {
    item: T;
    next: Maybe<Item<T>>;
}

// Example of usage:

// const queue = new QueueLinkedList<number>();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.dequeue(); // -> 1
// queue.dequeue(); // -> 2
// queue.dequeue(); // -> undefined
// queue.enqueue(3);
// queue.dequeue(); // -> 3
