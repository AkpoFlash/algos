import { PriorityQueueOrdered, PriorityQueueUnordered } from '../../main/structures';

describe('priorityQueueOrdered', () => {
    it('should be empty from scratch', () => {
        const queue = new PriorityQueueOrdered<number>();
        expect(queue.isEmpty()).toBe(true);
    });

    it('should not be empty after add something', () => {
        const queue = new PriorityQueueOrdered<number>();
        queue.insert(1);
        expect(queue.isEmpty()).toBe(false);
    });

    it('should give correct max and be empty after remove', () => {
        const queue = new PriorityQueueOrdered<number>();
        const value = 1;
        queue.insert(value);
        expect(queue.deleteMax()).toBe(value);
        expect(queue.isEmpty()).toBe(true);
    });

    it('should give correct values', () => {
        const first = 5;
        const second = 2;
        const third = 3;
        const queue = new PriorityQueueOrdered<number>();
        queue.insert(first);
        queue.insert(second);
        queue.insert(third);
        expect(queue.deleteMax()).toBe(first);
        expect(queue.deleteMax()).toBe(third);
        expect(queue.deleteMax()).toBe(second);
        expect(queue.deleteMax()).toBe(undefined);
        expect(queue.isEmpty()).toBe(true);
    });
})

describe('priorityQueueUnordered', () => {
    it('should be empty from scratch', () => {
        const queue = new PriorityQueueUnordered<number>();
        expect(queue.isEmpty()).toBe(true);
    });

    it('should not be empty after add something', () => {
        const queue = new PriorityQueueUnordered<number>();
        queue.insert(1);
        expect(queue.isEmpty()).toBe(false);
    });

    it('should give correct max and be empty after remove', () => {
        const queue = new PriorityQueueUnordered<number>();
        const value = 1;
        queue.insert(value);
        expect(queue.deleteMax()).toBe(value);
        expect(queue.isEmpty()).toBe(true);
    });

    it('should give correct values', () => {
        const first = 5;
        const second = 2;
        const third = 3;
        const queue = new PriorityQueueUnordered<number>();
        queue.insert(first);
        queue.insert(second);
        queue.insert(third);
        expect(queue.deleteMax()).toBe(first);
        expect(queue.deleteMax()).toBe(third);
        expect(queue.deleteMax()).toBe(second);
        expect(queue.deleteMax()).toBe(undefined);
        expect(queue.isEmpty()).toBe(true);
    });
})
