import { Maybe } from '../../utils/types';

export class StackLinkedList<T> {
    first: Maybe<Item<T>> = null;

    public isEmpty(){
        return this.first === null;
    }

    public push(item: T) {
        const oldItem = this.first;
        this.first = { item, next: oldItem };
    }

    public pop() {
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

const stack = new StackLinkedList<string>();
stack.push('first');
stack.push('second');
console.log(stack.pop()); // -> second
console.log(stack.pop()); // -> first
console.log(stack.pop()); // -> undefined
stack.push('third');
console.log(stack.pop()); // -> third
