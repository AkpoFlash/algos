import { Maybe } from '../types';
import { BST } from './binarySearchTree';

export interface IRedBlackTree<K, V> {
    get: (key: K) => Maybe<Node<K, V>>;
    put: (key: K, value: V) => void;
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
 * This class implements red black tree (RBT)
 * This is type of {@link BST} with additional properties
 * 
 * RBT guarants us (unlike {@link BST}):
 *  - search - {@link get} (~logN)
 *  - insert - {@link put} (~logN)
 *  - delete - {@link delete} (~logN)
 */
export class RedBlackTree<K, V> implements IRedBlackTree<K, V> {
    public root: Maybe<Node<K, V>>;

    private _rotateLeft = (root: Node<K, V>): Node<K, V> => {
        const node = root.right!;
        root.right = node.left;
        node.left = root;
        node.color = root.color;
        root.color = TreeColors.RED;
        return node;
    }

    private _rotateRight = (root: Node<K, V>): Node<K, V> => {
        const node = root.left!;
        root.left = node.right;
        node.right = root;
        node.color = root.color;
        root.color = TreeColors.RED;
        return node;
    }

    private _flipColor = (node: Node<K, V>): void => {
        node.color = TreeColors.RED;
        node.right!.color = TreeColors.BLACK;
        node.left!.color = TreeColors.BLACK;
    }

    private _isRed = (node: Maybe<Node<K, V>>): boolean => {
        return node?.color === TreeColors.RED;
    }

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
        this.root = this._put(this.root, new Node({ key, value, color: TreeColors.RED }));
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

        if (this._isRed(root.right) && !this._isRed(root.left)) {
            root = this._rotateLeft(root);
        }
        else if (this._isRed(root.left) && this._isRed(root.left?.left)) {
            root = this._rotateRight(root);
        }
        else if (this._isRed(root.left) && this._isRed(root.right)) {
            this._flipColor(root);
        }

        root.size = 1 + this._size(root.left) + this._size(root.right);
        return root;
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

enum TreeColors {
    RED = 'red',
    BLACK = 'black',
}

class Node<K, V> {
    public key: K;
    public color: TreeColors;
    public value?: V | undefined;
    public left?: Maybe<Node<K, V>>;
    public right?: Maybe<Node<K, V>>;
    public size?: number;

    constructor(node: Node<K, V>) {
        this.key = node.key;
        this.color = node.color;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
        this.size = node.size ?? 0;
    }
}


// Example of usage:

const rbt = new RedBlackTree<string, number>();

rbt.put('5', 5);
rbt.put('3', 3);
rbt.put('2', 2);
rbt.put('1', 1);
rbt.put('8', 8);

console.log(rbt.floor('9'));
console.log(rbt.ceil('0'));
console.log(rbt.get('2'));
console.log(rbt.keys());
