// common class for priority queue
class PriorityQueueMax {
    queue = [];

    exch(i, j) {
        [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
    }

    less(i, j) {
        return this.queue[i] < this.queue[j];
    }
}

// unordered priority queue
// insert O(1)
// delMax O(N)
class PriorityQueueMaxUnordered extends PriorityQueueMax {
    insert(item) {
        this.queue.push(item);
    }

    delMax() {
        let maxIndex = 0;
        for (let i = 1; i < this.queue.length; i++) {
            if (this.less(maxIndex, i)) {
                maxIndex = i;
            }
        }
        this.exch(maxIndex, this.queue.length - 1);
        return this.queue.pop();
    }
}

// ordered priority queue
// insert O(N)
// delMax O(1)
class PriorityQueueMaxOrdered extends PriorityQueueMax {
    insert(item) {
        this.queue.push(item);
        let i = this.queue.length - 1;
        for (let j = i - 1; this.less(i, j); j--, i--) {
            this.exch(i, j);
        }
    }

    delMax() {
        return this.queue.pop();
    }
}


// binary heap priority queue
// insert O(log N)
// delMax O(log N)
class PriorityQueueMaxHeap extends PriorityQueueMax {
    swim(k) {
        while (k > 0 && this.less(Math.floor(k / 2), k)) {
            this.exch(Math.floor(k / 2), k);
            k = Math.floor(k / 2);
        }
    }

    insert(node) {
        this.queue.push(node);
        this.swim(this.queue.length - 1);
    }

    sink(k) {
        while (2 * k < this.queue.length) {
            let j = 2 * k;

            // find the biggest child of K-node
            if (j < this.queue.length - 1 && this.less(j, j + 1)) {
                j++;
            }

            // check and if K-node bigger than biggest of children we end
            if (!this.less(k, j)) {
                break;
            }

            // otherwise exchange parent with the biggest child
            this.exch(j, k);
            k = j;
        }
    }

    delMax() {
        const max = this.queue[0];
        this.exch(0, this.queue.length - 1);
        this.queue.pop();
        this.sink(0);
        return max;
    }
}
