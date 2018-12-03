import { 
    createArray, 
    updatedFoodGrid, 
    moveUp, 
    moveDown,
    moveRight,
    moveLeft 
} from '../utils'


describe('Util fucntions testing', () => {

    // Creates a new grid
    it('Create Array functions creates a 2D array with a specified amount', () => {
        expect(createArray(1)).toEqual([[0]])
        expect(createArray(2)).toEqual([[0, 0], [0, 0]])
        expect(createArray(3)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
        expect(createArray(6)).toHaveLength(6)
    })

    // Updates the grid with a food item
    it('Updates the array with a new food item', () => {
        const newGrid = createArray(3)
        const foodArray1 = [1, 1]
        expect(updatedFoodGrid(newGrid, foodArray1)).toEqual([[0, 0, 0], [0, 2, 0], [0, 0, 0]])
    })
    it('Updates the array with a new food item', () => {
        const newGrid = createArray(3)
        const foodArray2 = [1, 2]
        expect(updatedFoodGrid(newGrid, foodArray2)).toEqual([[0, 0, 0], [0, 0, 2], [0, 0, 0]])
    })
    it('Updates the array with a new food item', () => {
        const newGrid = createArray(3)
        const foodArray2 = [0, 0]
        expect(updatedFoodGrid(newGrid, foodArray2)).toEqual([[2, 0, 0], [0, 0, 0], [0, 0, 0]])
    })

    // Moves the snake up
    it('Moves the snake direction up by one', () => {
        expect(moveUp([0, 0])).toEqual([0, 1])
        expect(moveUp([0, 1])).toEqual([0, 2])
    })

    // Moves the snake down
    it('Moves the snake direction down', () => {
        expect(moveDown([0, 10])).toEqual([0, 9])
        expect(moveDown([0, 9])).toEqual([0, 8])
    })

    // Moves the snake Right
    it('Moves the snake direction down', () => {
        expect(moveRight([0, 0])).toEqual([1, 0])
        expect(moveRight([1, 0])).toEqual([2, 0])
    })

    // Moves the snake Left
    it('Moves the snake direction down', () => {
        expect(moveLeft([10, 0])).toEqual([9, 0])
        expect(moveLeft([9, 0])).toEqual([8, 0])
    })
})