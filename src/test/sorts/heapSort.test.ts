import { SORTING_TEST_DATA } from './resoures/sorting.resources';
import { heapSort } from '../../main/sorts';

describe('heapSort', () => {
    it.each(SORTING_TEST_DATA)('should sort array in ascending order', ({ unsorted, sorted }) => {
        const result = heapSort([...unsorted]);
        expect(result).toEqual(sorted);
    });
})
