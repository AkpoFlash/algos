export class StackArray<T> {
    stack: (T | undefined)[] = [];
    size = 0;

    public push(item: T) {
        this.stack[this.size++] = item;
    }

    public pop() {
        const item = this.stack[--this.size];
        this.stack[this.size] = undefined;
        return item;
    }
}

// Example of usage:

const stack = new StackArray<string>();
stack.push('first');
stack.push('second');
console.log(stack.pop()); // -> second
console.log(stack.pop()); // -> first
console.log(stack.pop()); // -> undefined
stack.push('third');
console.log(stack.pop()); // -> third
