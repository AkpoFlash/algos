import { UNSORTED_DATA } from './resoures/sorting.resources';
import { shellSort } from '../../main/sorts/shellSort';

describe('shellSort', () => {
    it.each(UNSORTED_DATA)('should sort array in ascending order', ({ unsorted, sorted }) => {
        const result = shellSort([...unsorted]);
        expect(result).toEqual(sorted);
    });
})
