import { selectSort } from '../../main/sorts';
import { SORTING_TEST_DATA } from './resoures/sorting.resources';

describe('selectSort', () => {
    it.each(SORTING_TEST_DATA)('should sort array in ascending order', ({ unsorted, sorted }) => {
        const result = selectSort([...unsorted]);
        expect(result).toEqual(sorted);
    });
})
