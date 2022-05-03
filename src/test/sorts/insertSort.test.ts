import { insertSort } from '../../main/sorts';
import { SORTING_TEST_DATA } from './resoures/sorting.resources';

describe('insertSort', () => {
    it.each(SORTING_TEST_DATA)('should sort array in ascending order', ({ unsorted, sorted }) => {
        const result = insertSort([...unsorted]);
        expect(result).toEqual(sorted);
    });
})
