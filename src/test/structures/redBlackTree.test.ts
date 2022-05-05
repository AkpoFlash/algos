import { RedBlackTree } from '../../main/structures';
import { BST_TEST_DATA } from './resoures/binarySearchTree.resources';

describe('redBlackTree', () => {
    it('should be empty from scratch', () => {
        const rbt = new RedBlackTree<string, number>();
        expect(rbt.isEmpty()).toBe(true);
    });

    it('should not be empty after add something', () => {
        const rbt = new RedBlackTree<string, number>();
        rbt.put('1', 1);
        expect(rbt.isEmpty()).toBe(false);
    });

    it.each(BST_TEST_DATA)('should give correct max and min', ({ input, max, min }) => {
        const rbt = new RedBlackTree<string | number, string | number>();
        input.forEach(item => rbt.put(item.key, item.value));
        expect(rbt.max()?.value).toBe(max.value);
        expect(rbt.min()?.value).toBe(min.value);
    });

    it.each(BST_TEST_DATA)('should get correct node', ({ input, unexisting_key }) => {
        const rbt = new RedBlackTree<string | number, string | number>();
        input.forEach(item => rbt.put(item.key, item.value));
        expect(rbt.get(input[3].key)?.value).toBe(input[3].value);
        expect(rbt.get(input[0].key)?.value).toBe(input[0].value);
        expect(rbt.get(unexisting_key)?.value).toBe(undefined);
    });

    it.each(BST_TEST_DATA)('should correctly work floor and ceil', ({ input, floor, ceil }) => {
        const rbt = new RedBlackTree<string | number, string | number>();
        input.forEach(item => rbt.put(item.key, item.value));
        floor.forEach(item => expect(rbt.floor(item.key)?.value).toBe(item.result));
        ceil.forEach(item => expect(rbt.ceil(item.key)?.value).toBe(item.result));
    });
})
