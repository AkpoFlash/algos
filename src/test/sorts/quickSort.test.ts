import { SORTING_TEST_DATA } from './resoures/sorting.resources';
import { quickSort } from '../../main/sorts/quickSort';

describe('quickSort', () => {
    it.each(SORTING_TEST_DATA)('should sort array in ascending order', ({ unsorted, sorted }) => {
        const result = quickSort([...unsorted]);
        expect(result).toEqual(sorted);
    });
})
