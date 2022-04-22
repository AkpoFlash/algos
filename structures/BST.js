class BST {
    root;

    get(key) {
        let node = this.root;
        while (node) {
            if (key < node.key) {
                node = node.left;
            } else if (key > node.key) {
                node = node.right;
            } else if (key === node.key) {
                return node;
            }
        }
        return null;
    }

    put(key, value) {
        this.root = this._put(this.root, key, value);
    }

    _put(node, key, value) {
        if (!node) {
            return new Node(key, value, 1);
        }
        if (key < node.key) {
            node.left = this._put(node.left, key, value);
        } else if (key > node.key) {
            node.right = this._put(node.right, key, value);
        } else if (key === node.key) {
            node.value = value;
        }
        node.count = 1 + this.size(node.left) + this.size(node.right);
        return node;
    }

    min(node = this.root) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    max(node = this.root) {
        while (node.right) {
            node = node.right;
        }
        return node;
    }

    floor(key) {
        const result = this._floor(this.root, key);
        return result ? result : null;
    }

    _floor(node, key) {
        if (!node) {
            return null;
        }

        if (key === node.key) {
            return node;
        }

        if (key < node.key) {
            return this._floor(node.left, key);
        }
        let nodeRight = this._floor(node.right, key);
        return nodeRight ? nodeRight : node;
    }

    ceil(key) {
        const result = this._ceil(this.root, key);
        return result ? result : null;
    }

    _ceil(node, key) {
        if (!node) {
            return null;
        }

        if (key === node.key) {
            return node;
        }

        if (key > node.key) {
            return this._ceil(node.right, key);
        }

        let nodeLeft = this._ceil(node.left, key);
        return nodeLeft ? nodeLeft : node;
    }

    size(node) {
        return node ? node.count : 0;
    }

    rank(key) {
        return this._rank(this.root, key);
    }

    _rank(node, key) {
        if (!node) {
            return 0;
        }

        if (key < node.key) {
            return this._rank(node.left, key);
        }
        if (key > node.key) {
            return 1 + this.size(node.left) + this._rank(node.right, key);
        }
        if (key === node.key) {
            return this.size(node.left);
        }
    }

    keys() {
        const result = [];
        this._inorder(this.root, result);
        return result;
    }

    _inorder(node, result) {
        if (!node) {
            return null;
        }
        this._inorder(node.left, result);
        result.push(node.key);
        this._inorder(node.right, result);
    }

    deleteMin() {
        this.root = this._deleteMin(this.root);
    }

    _deleteMin(node) {
        if (!node.left) {
            return node.right;
        }
        node.left = this._deleteMin(node.left);
        node.count = 1 + this.size(node.left) + this.size(node.right);
        return node;
    }

    delete(key) {
        this.root = this._delete(key, this.root);
    }

    _delete(key, node) {
        if (!node) {
            return null;
        }

        if (key < node.key) {
            node.left = this._delete(key, node.left);
        }
        else if (key > node.key) {
            node.right = this._delete(key, node.right);
        }
        else {
            if (!node.right) return node.left;
            if (!node.left) return node.right;

            let nodeMinSuccessor = node;
            node = this.min(nodeMinSuccessor.right);
            node.right = this._deleteMin(nodeMinSuccessor.right);
            node.left = nodeMinSuccessor.left;
        }
        node.count = 1 + this.size(node.left) + this.size(node.right);
        return node;
    }
}

class Node {
    key = null;
    value = null;
    left = null;
    right = null;
    count = 0;

    constructor(key, value, count) {
        this.key = key;
        this.value = value;
        this.count = count;
    }
}

const bst_obj = new BST();

bst_obj.put('5', 5);
bst_obj.put('3', 3);
bst_obj.put('2', 2);
bst_obj.put('1', 1);
bst_obj.put('8', 8);

console.log(bst_obj.keys());
