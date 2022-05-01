import { SORTING_TEST_DATA } from './resoures/sorting.resources';
import { insertSort } from '../../main/sorts';

describe('insertSort', () => {
    it.each(SORTING_TEST_DATA)('should sort array in ascending order', ({ unsorted, sorted }) => {
        const result = insertSort([...unsorted]);
        expect(result).toEqual(sorted);
    });
})
