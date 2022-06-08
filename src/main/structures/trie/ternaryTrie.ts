import { Trie } from './index';

/**
 * This algorithm fixed problem with memory spending from {@link Trie}
 * And still has a good performance (~L) for search/insert
 */
export class TernaryTrie<T> {
    private _root: Node<T> | undefined;

    public put = (str: string, value: T): void => {
        this._root = this._put(this._root, str, value, 0);
    }

    public contain = (str: string): boolean => {
        return this.get(str) !== undefined;
    }

    public get = (str: string): T | undefined => {
        if (this._root) {
            const node = this._get(this._root, str, 0);
            if (node) {
                return node.value;
            }
        }
    }

    private _get = (node: Node<T> | undefined, str: string, index: number): Node<T> | undefined => {
        if (node === undefined) {
            return;
        }

        const char = str[index];

        if (char < node.char) {
            return this._get(node.left, str, index);
        }
        else if (char > node.char) {
            return this._get(node.right, str, index);
        }
        else if (index < str.length - 1) {
            return this._get(node.mid, str, index + 1);
        }

        return node;
    }

    private _put = (node: Node<T> | undefined, str: string, value: T, index: number): Node<T> => {
        const char = str[index];

        if (node === undefined) {
            node = new Node<T>(char);
        }

        if (char < node.char) {
            node.left = this._put(node.left, str, value, index);
        }
        else if (char > node.char) {
            node.right = this._put(node.right, str, value, index);
        }
        else if (index < str.length - 1) {
            node.mid = this._put(node.mid, str, value, index + 1);
        }
        else {
            node.value = value;
        }

        return node;
    }
}

class Node<T> {
    public value: T | undefined;
    public char: string;
    public left: Node<T> | undefined;
    public mid: Node<T> | undefined;
    public right: Node<T> | undefined;

    constructor(char: string) {
        this.char = char;
    }
}

// Example of usage:

// const trie = new TernaryTrie<number>();
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
