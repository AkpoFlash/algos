import { QueueArray, QueueLinkedList } from '../../main/structures/queue';

describe('QueueArray', () => {
    it('should be empty from scratch', () => {
        const queue = new QueueArray<number>();
        expect(queue.isEmpty()).toBe(true);
    });

    it('should not be empty after add something', () => {
        const queue = new QueueArray<number>();
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });

    it('should be empty after remove', () => {
        const queue = new QueueArray<number>();
        queue.enqueue(1);
        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
    });

    it('should dequeue properly', () => {
        const first = 1;
        const second = 2;
        const third = 3;
        const queue = new QueueArray<number>();
        queue.enqueue(first);
        queue.enqueue(second);
        queue.enqueue(third);
        expect(queue.dequeue()).toBe(first);
        expect(queue.dequeue()).toBe(second);
        expect(queue.dequeue()).toBe(third);
    });
})

describe('QueueLinkedList', () => {
    it('should be empty from scratch', () => {
        const queue = new QueueLinkedList<number>();
        expect(queue.isEmpty()).toBe(true);
    });

    it('should not be empty after add something', () => {
        const queue = new QueueLinkedList<number>();
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });

    it('should be empty after remove', () => {
        const queue = new QueueLinkedList<number>();
        queue.enqueue(1);
        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
    });

    it('should dequeue properly', () => {
        const first = 1;
        const second = 2;
        const third = 3;
        const queue = new QueueLinkedList<number>();
        queue.enqueue(first);
        queue.enqueue(second);
        queue.enqueue(third);
        expect(queue.dequeue()).toBe(first);
        expect(queue.dequeue()).toBe(second);
        expect(queue.dequeue()).toBe(third);
    });
})
