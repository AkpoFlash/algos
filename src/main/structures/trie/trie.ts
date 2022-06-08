/**
 * This algorithm quite efficient for search (@method get) and insert (@method put) both take (~L) time,
 * but this implementation takes a lot of memory in languages where you need define size of array explicit
 * In that case the size of each node equal to the alphabet size
 */
export class Trie<T> {
    private _root = new Node<T>();

    public put = (str: string, value: T): void => {
        this._root = this._put(this._root, str, value, 0);
    }

    public contain = (str: string): boolean => {
        return this.get(str) !== undefined;
    }

    public get = (str: string): T | undefined => {
        const node = this._get(this._root, str, 0);
        if (node) {
            return node.value;
        }
    }

    private _get = (node: Node<T>, str: string, index: number): Node<T> | undefined => {
        if (node === undefined) {
            return;
        }
        if (index === str.length) {
            return node;
        }

        const char = str[index];
        return this._get(node.next[char], str, index + 1);
    }

    private _put = (node: Node<T>, str: string, value: T, index: number): Node<T> => {
        if (node === undefined) {
            node = new Node<T>();
        }
        if (index === str.length) {
            node.value = value;
            return node;
        }

        const char = str[index];
        node.next[char] = this._put(node.next[char], str, value, index + 1);

        return node;
    }
}

class Node<T> {
    public value: T | undefined;
    public next = {} as Record<string, Node<T>>;
}

// Example of usage:

// const trie = new Trie<number>();
// trie.get('she'); // -> undefined
// trie.put('she', 0);
// trie.get('she'); // -> 0
// trie.put('shell', 1);
// trie.put('shells', 2);
// trie.get('shell'); // -> 1
// trie.get('shells'); // -> 2
// trie.put('by', 3);
// trie.put('buy', 4);
// trie.get('buy'); // -> 4
// trie.contain('bull'); // -> false
// trie.contain('by'); // -> true
