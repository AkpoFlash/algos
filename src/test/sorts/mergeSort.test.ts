import { mergeSortBottomUp, mergeSortUpBottom } from '../../main/sorts';
import { SORTING_TEST_DATA } from './resoures/sorting.resources';

describe('mergeSortBottomUp', () => {
    it.each(SORTING_TEST_DATA)('should sort array in ascending order', ({ unsorted, sorted }) => {
        const result = mergeSortBottomUp([...unsorted]);
        expect(result).toEqual(sorted);
    });
})

describe('mergeSortUpBottom', () => {
    it.each(SORTING_TEST_DATA)('should sort array in ascending order', ({ unsorted, sorted }) => {
        const result = mergeSortUpBottom([...unsorted]);
        expect(result).toEqual(sorted);
    });
})
