namespace StackLinkedList {
    class Stack<T> {
        first: Item<T> | null | undefined;

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
        next: Item<T> | null | undefined;
    }

    // Example of usage:

    const stack = new Stack<string>();
    stack.push("first");
    stack.push("second");
    console.log(stack.pop()); // -> second
    console.log(stack.pop()); // -> first
    console.log(stack.pop()); // -> undefined
    stack.push("third");
    console.log(stack.pop()); // -> third
}
