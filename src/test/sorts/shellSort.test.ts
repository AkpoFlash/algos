import { shellSort } from '../../main/sorts';
import { SORTING_TEST_DATA } from './resoures/sorting.resources';

describe('shellSort', () => {
    it.each(SORTING_TEST_DATA)('should sort array in ascending order', ({ unsorted, sorted }) => {
        const result = shellSort([...unsorted]);
        expect(result).toEqual(sorted);
    });
})
