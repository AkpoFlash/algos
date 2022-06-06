import { lsdSort } from '../../main/sorts';
import { SORTING_STRING_TEST_DATA } from './resoures/sortingString.resources';

describe('lsdSort', () => {
    it.each(SORTING_STRING_TEST_DATA)('should sort array in ascending order', ({ unsorted, alphabet, stringsLength, sorted }) => {
        const result = lsdSort([...unsorted], alphabet, stringsLength);
        expect(result).toEqual(sorted);
    });
})
