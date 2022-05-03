import { Maybe } from '../utils';

export interface IBST<K, V> {
    get: (key: K) => Maybe<Node<K, V>>;
    put: (key: K, value: V) => void;
    delete: (key: K) => Maybe<Node<K, V>>;
    max: (key?: K) => Maybe<Node<K, V>>;
    min: (key?: K) => Maybe<Node<K, V>>;
    floor: (key: K) => Maybe<Node<K, V>>;
    ceil: (key: K) => Maybe<Node<K, V>>;
    keys: (key?: K) => [K, V | undefined][] | null;
}

/**
 * todo write docs for class and each method
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

    // todo
    public delete = (key: K): Maybe<Node<K, V>> => {
        const x = this.get(key);
        // todo implement delete
        return x;
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

    // todo
    public floor = (key: K): Maybe<Node<K, V>> => {
        return null;
    }

    // todo
    public ceil = (key: K): Maybe<Node<K, V>> => {
        return null;
    }

    public keys = (key?: K): [K, V | undefined][] | null => {
        let node = key !== undefined ? this.get(key) : this.root;

        if (!node) {
            return null;
        }

        return this._inorder(node);
    }

    // todo find out how to solve this types [Pick<Node<T>, 'key'>, Pick<Node<T>, 'value'>][]
    private _inorder = (node: Maybe<Node<K, V>>, result: [K, V | undefined][] = []): [K, V | undefined][] | null => {
        if (!node) {
            return null;
        }
        this._inorder(node.left, result);
        result.push([node.key, node.value]);
        this._inorder(node.right, result);
        return result;
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

console.log(bst.get('3'));
console.log(bst.keys());
