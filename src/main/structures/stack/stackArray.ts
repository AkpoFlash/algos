export class StackArray<T> {
    stack: (T | undefined)[] = [];
    size = 0;

    public isEmpty(): boolean {
        return !this.size;
    }

    public push(item: T): void {
        this.stack[this.size++] = item;
    }

    public pop(): T | undefined {
        const item = this.stack[--this.size];
        this.stack[this.size] = undefined;
        return item;
    }
}

// Example of usage:

// const stack = new StackArray<string>();
// stack.push('first');
// stack.push('second');
// stack.pop(); // -> second
// stack.pop(); // -> first
// stack.pop(); // -> undefined
// stack.push('third');
// stack.pop(); // -> third
