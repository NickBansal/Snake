import { createArray, generateRandomFood } from '../utils'


describe('Util fucntions testing', () => {

    it('Create Array functions creates a 2D array with a specified amount', () => {
        expect(createArray(1)).toEqual([[0]])
        expect(createArray(2)).toEqual([[0, 0], [0, 0]])
        expect(createArray(3)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
        expect(createArray(6)).toHaveLength(6)
    })

})