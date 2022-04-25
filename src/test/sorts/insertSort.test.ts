import { UNSORTED_DATA } from './resoures/sorting.resources';
import { insertSort } from '../../main/sorts/insertSort';

describe('insertSort', () => {
    it.each(UNSORTED_DATA)('should sort array in ascending order', ({ unsorted, sorted }) => {
        const result = insertSort([...unsorted]);
        expect(result).toEqual(sorted);
    });
})
