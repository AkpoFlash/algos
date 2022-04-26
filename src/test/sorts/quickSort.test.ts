import { UNSORTED_DATA } from './resoures/sorting.resources';
import { quickSort } from '../../main/sorts/quickSort';

describe('quickSort', () => {
    it.each(UNSORTED_DATA)('should sort array in ascending order', ({ unsorted, sorted }) => {
        const result = quickSort([...unsorted]);
        expect(result).toEqual(sorted);
    });
})
