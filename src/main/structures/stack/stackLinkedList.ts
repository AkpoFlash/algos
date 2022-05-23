import { Maybe } from '../../types';

export class StackLinkedList<T> {
    first: Maybe<Item<T>> = null;

    public isEmpty(): boolean {
        return this.first === null;
    }

    public push(item: T): void {
        const oldItem = this.first;
        this.first = { item, next: oldItem };
    }

    public pop(): T | undefined {
        const item = this.first?.item;
        this.first = this.first?.next;
        return item;
    }
}

type Item<T> = {
    item: T;
    next: Maybe<Item<T>>;
}

// Example of usage:

// const stack = new StackLinkedList<string>();
// stack.push('first');
// stack.push('second');
// stack.pop(); // -> second
// stack.pop(); // -> first
// stack.pop(); // -> undefined
// stack.push('third');
// stack.pop(); // -> third
