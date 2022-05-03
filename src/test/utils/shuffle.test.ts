import { shuffleInsert, shuffleSort } from '../../main/utils';

describe('shuffleInsert', () => {
    it('should shuffle array in random order', () => {
        const initArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const firstResult = shuffleInsert(initArray);
        const secondResult = shuffleInsert(initArray);
        expect(firstResult).not.toEqual(secondResult);
    });
})

describe('shuffleSort', () => {
    it('should shuffle array in random order', () => {
        const initArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const firstResult = shuffleSort(initArray);
        const secondResult = shuffleSort(initArray);
        expect(firstResult).not.toEqual(secondResult);
    });
})
