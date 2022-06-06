import { radixSort } from '../../main/sorts';
import { SORTING_WITH_DUBLICATES_TEST_DATA } from './resoures/sortingWithDublicates.resources';

describe('radixSort', () => {
    it.each(SORTING_WITH_DUBLICATES_TEST_DATA)('should sort array in ascending order', ({ unsorted, alphabet, sorted }) => {
        const result = radixSort([...unsorted], alphabet);
        expect(result).toEqual(sorted);
    });
})
