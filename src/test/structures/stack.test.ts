import { StackArray, StackLinkedList } from '../../main/structures/stack';

describe('QueueArray', () => {
    it('should be empty from scratch', () => {
        const queue = new StackArray<number>();
        expect(queue.isEmpty()).toBe(true);
    });

    it('should not be empty after add something', () => {
        const queue = new StackArray<number>();
        queue.push(1);
        expect(queue.isEmpty()).toBe(false);
    });

    it('should be empty after remove', () => {
        const queue = new StackArray<number>();
        queue.push(1);
        queue.pop();
        expect(queue.isEmpty()).toBe(true);
    });

    it('should dequeue properly', () => {
        const first = 1;
        const second = 2;
        const third = 3;
        const queue = new StackArray<number>();
        queue.push(first);
        queue.push(second);
        queue.push(third);
        expect(queue.pop()).toBe(third);
        expect(queue.pop()).toBe(second);
        expect(queue.pop()).toBe(first);
    });
})

describe('QueueLinkedList', () => {
    it('should be empty from scratch', () => {
        const queue = new StackLinkedList<number>();
        expect(queue.isEmpty()).toBe(true);
    });

    it('should not be empty after add something', () => {
        const queue = new StackLinkedList<number>();
        queue.push(1);
        expect(queue.isEmpty()).toBe(false);
    });

    it('should be empty after remove', () => {
        const queue = new StackLinkedList<number>();
        queue.push(1);
        queue.pop();
        expect(queue.isEmpty()).toBe(true);
    });

    it('should dequeue properly', () => {
        const first = 1;
        const second = 2;
        const third = 3;
        const queue = new StackLinkedList<number>();
        queue.push(first);
        queue.push(second);
        queue.push(third);
        expect(queue.pop()).toBe(third);
        expect(queue.pop()).toBe(second);
        expect(queue.pop()).toBe(first);
    });
})
