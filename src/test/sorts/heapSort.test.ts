import { heapSort } from '../../main/sorts';
import { SORTING_TEST_DATA } from './resoures/sorting.resources';

describe('heapSort', () => {
    it.each(SORTING_TEST_DATA)('should sort array in ascending order', ({ unsorted, sorted }) => {
        const result = heapSort([...unsorted]);
        expect(result).toEqual(sorted);
    });
})
