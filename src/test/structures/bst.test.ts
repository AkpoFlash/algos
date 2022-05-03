import { BST } from '../../main/structures';
import { BST_TEST_DATA } from './resoures/bst.resources';

describe('bst', () => {
    it('should be empty from scratch', () => {
        const bst = new BST<string, number>();
        expect(bst.isEmpty()).toBe(true);
    });

    it('should not be empty after add something', () => {
        const bst = new BST<string, number>();
        bst.put('1', 1);
        expect(bst.isEmpty()).toBe(false);
    });

    it.each(BST_TEST_DATA)('should give correct max and min', ({ input, max, min }) => {
        const bst = new BST<string | number, string | number>();
        input.forEach(item => bst.put(item.key, item.value));
        expect(bst.max()?.value).toBe(max.value);
        expect(bst.min()?.value).toBe(min.value);
    });

    it.each(BST_TEST_DATA)('should get correct node', ({ input, unexisting_key }) => {
        const bst = new BST<string | number, string | number>();
        input.forEach(item => bst.put(item.key, item.value));
        expect(bst.get(input[3].key)?.value).toBe(input[3].value);
        expect(bst.get(input[0].key)?.value).toBe(input[0].value);
        expect(bst.get(unexisting_key)?.value).toBe(undefined);
    });
})
