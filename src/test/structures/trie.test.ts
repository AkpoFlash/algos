import { Trie } from '../../main/structures';
import { TRIE_TEST_DATA } from './resoures/trie.resources';

describe('trie', () => {
    it.each(TRIE_TEST_DATA)('should give right value', ({ input, getOutput }) => {
        const trie = new Trie<string | number>();
        input.forEach(item => trie.put(...item));
        getOutput.forEach(item => expect(trie.get(item[0])).toBe(item[1]));
    });

    it.each(TRIE_TEST_DATA)('should be correctly find existing of node', ({ input, containsOutput }) => {
        const trie = new Trie<string | number>();
        input.forEach(item => trie.put(...item));
        containsOutput.forEach(item => expect(trie.contain(item[0])).toBe(item[1]));
    });
});
