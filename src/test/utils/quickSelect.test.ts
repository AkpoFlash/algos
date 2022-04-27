import { QUICK_SELECT_TEST_DATA } from './resources/quickSelect.resources';
import { quickSelect } from '../../main/utils';

describe('quickSelect', () => {
    it.each(QUICK_SELECT_TEST_DATA)('should find kth smallest element', ({ array, k, expected}) => {
        const result = quickSelect(array, k);
        expect(result).toBe(expected);
    });
})
