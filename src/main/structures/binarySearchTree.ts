import { Maybe } from '../types';

export interface IBST<K, V> {
    get: (key: K) => Maybe<Node<K, V>>;
    put: (key: K, value: V) => void;
    delete: (key: K) => void;
    max: (key?: K) => Maybe<Node<K, V>>;
    min: (key?: K) => Maybe<Node<K, V>>;
    floor: (key: K) => Maybe<Node<K, V>>;
    ceil: (key: K) => Maybe<Node<K, V>>;

    /**
     * @returns all tree's nodes as a array of tuples by ascending order
     */
    keys: (key?: K) => [K, V | undefined][] | null;

    /**
     * @returns numbers of elements less than given @param key
     */
    rank: (key: K) => number;
}

/**
 * This class implements binary search tree (BST)
 * 
 * BST guarants us:
 *  - search - {@link get} (~N)
 *  - insert - {@link put} (~N)
 *  - delete - {@link delete} (~N)
 * 
 * But avarage cases are:
 *  - search - {@link get} (~logN)
 *  - insert - {@link put} (~logN)
 *  - delete - {@link delete} (~sqrtN)
 */
export class BST<K, V> implements IBST<K, V> {
    public root: Maybe<Node<K, V>>;

    public get = (key: K): Maybe<Node<K, V>> => {
        let root = this.root;
        while (root) {
            if (root.key > key) {
                root = root.left;
            }
            else if (root.key < key) {
                root = root.right;
            }
            else if (root.key === key) {
                return root;
            }
        }
        return null;
    }

    public put = (key: K, value: V): void => {
        this.root = this._put(this.root, new Node({ key, value }));
    }

    private _put = (root: Maybe<Node<K, V>>, node: Node<K, V>): Node<K, V> => {
        if (!root) {
            root = new Node(node);
        }

        if (root.key < node.key) {
            root.right = this._put(root.right, node);
        }
        else if (root.key > node.key) {
            root.left = this._put(root.left, node);
        }
        else {
            root.value = node.value;
        }
        root.size = 1 + this._size(root.left) + this._size(root.right);
        return root;
    }

    public delete = (key: K): void => {
        this.root = this._delete(this.root, key)
    }

    private _delete = (root: Maybe<Node<K, V>>, key: K): Maybe<Node<K, V>> => {
        if (!root) {
            return null;
        }

        if (root.key < key) {
            root.right = this._delete(root.right, key);
        }
        else if (root.key > key) {
            root.left = this._delete(root.left, key);
        }
        else {
            if (!root.right) {
                return root.left;
            }
            if (!root.left) {
                return root.right;
            }

            const node = root;
            root = this.min(node.right?.key)!;
            root.right = this._deleteMin(node.right);
            root.left = node.left;
        }

        root.size = 1 + this._size(root.left) + this._size(root.right);
        return root;
    }

    private _deleteMin = (node: Maybe<Node<K, V>>): Maybe<Node<K, V>> => {
        if (!node) {
            return null;
        }

        if (!node.left) {
            return node.right;
        }

        node.left = this._deleteMin(node.left);
        node.size = 1 + this._size(node.left) + this._size(node.right);
        return node;
    }

    public max = (key?: K): Maybe<Node<K, V>> => {
        let node = key !== undefined ? this.get(key) : this.root;

        if (!node) {
            return null;
        }

        while (node.right) {
            node = node.right;
        }

        return node;
    }

    public min = (key?: K): Maybe<Node<K, V>> => {
        let node = key !== undefined ? this.get(key) : this.root;

        if (!node) {
            return null;
        }

        while (node.left) {
            node = node.left;
        }

        return node;
    }

    public floor = (key: K): Maybe<Node<K, V>> => {
        return this._floor(this.root, key);
    }

    private _floor = (root: Maybe<Node<K, V>>, key: K): Maybe<Node<K, V>> => {
        if (!root) {
            return null;
        }

        if (root.key === key) {
            return root;
        }

        if (root.key > key) {
            return this._floor(root.left, key);
        }

        return this._floor(root.right, key) || root;
    }

    public ceil = (key: K): Maybe<Node<K, V>> => {
        return this._ceil(this.root, key);
    }

    private _ceil = (root: Maybe<Node<K, V>>, key: K): Maybe<Node<K, V>> => {
        if (!root) {
            return null;
        }

        if (root.key === key) {
            return root;
        }

        if (root.key < key) {
            return this._ceil(root.right, key);
        }

        return this._ceil(root.left, key) || root;
    }

    public keys = (key?: K): [K, V | undefined][] | null => {
        let node = key !== undefined ? this.get(key) : this.root;

        if (!node) {
            return null;
        }

        return this._inorder(node);
    }

    private _inorder = (node: Maybe<Node<K, V>>, result: [K, V | undefined][] = []): [K, V | undefined][] | null => {
        if (!node) {
            return null;
        }

        this._inorder(node.left, result);
        result.push([node.key, node.value]);
        this._inorder(node.right, result);

        return result;
    }

    public rank = (key: K): number => {
        return this._rank(this.root, key);
    }

    private _rank = (node: Maybe<Node<K, V>>, key: K): number => {
        if (!node) {
            return 0;
        }

        if (node.key > key) {
            return this._rank(node.left, key);
        }

        if (node.key < key) {
            return 1 + this._size(node.left) + this._rank(node.right, key);
        }

        return this._size(node.left);
    }

    private _size = (node: Maybe<Node<K, V>>): number => {
        return node?.size ?? 0;
    }

    public isEmpty = (): boolean => {
        return !this.root;
    }
}

class Node<K, V> {
    public key: K;
    public value?: V | undefined;
    public left?: Maybe<Node<K, V>>;
    public right?: Maybe<Node<K, V>>;
    public size?: number;

    constructor(node: Node<K, V>) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
        this.size = node.size ?? 0;
    }
}


// Example of usage:

const bst = new BST<string, number>();

bst.put('5', 5);
bst.put('3', 3);
bst.put('2', 2);
bst.put('1', 1);
bst.put('8', 8);
bst.delete('5');

console.log(bst.floor('5'));
console.log(bst.ceil('4'));
console.log(bst.get('5'));
console.log(bst.keys());
