import { 
    createGameBoard, 
    createEmptyGameBoard,
    updatedGridWithNewFood, 
    moveUp, 
    moveDown,
    moveRight,
    moveLeft,
    updatedSnakeArray,
    moveSnake
} from '../utils'


describe('Util fucntions testing', () => {

    // Creates a new empty GameBoard
    it('Checks that create Array return the correct 2D array', () => {
        expect(createEmptyGameBoard(1)).toEqual([[0]])
        expect(createEmptyGameBoard(2)).toEqual([[0, 0], [0, 0]])
        expect(createEmptyGameBoard(3)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
    })

    // Creates a new grid
    it('Create Array functions creates a 2D array with a specified amount', () => {
        expect(createGameBoard(1)).toEqual([[1]])
        expect(createGameBoard(2)).toEqual([[0, 0], [0, 1]])
        expect(createGameBoard(3)).toEqual([[0, 0, 0], [0, 1, 0], [0, 0, 0]])
        expect(createGameBoard(6)).toHaveLength(6)
    })

    // Updates the grid with a food item
    it('Updates the array with a new food item', () => {
        const newGrid = createGameBoard(3)
        const foodArray1 = [1, 1]
        expect(updatedGridWithNewFood(newGrid, foodArray1)).toEqual([[0, 0, 0], [0, 2, 0], [0, 0, 0]])
    })
    it('Updates the array with a new food item', () => {
        const newGrid = createGameBoard(3)
        const foodArray2 = [1, 2]
        expect(updatedGridWithNewFood(newGrid, foodArray2)).toEqual([[0, 0, 0], [0, 1, 2], [0, 0, 0]])
    })
    it('Updates the array with a new food item', () => {
        const newGrid = createGameBoard(3)
        const foodArray2 = [0, 0]
        expect(updatedGridWithNewFood(newGrid, foodArray2)).toEqual([[2, 0, 0], [0, 1, 0], [0, 0, 0]])
    })

    // Moves the snake up
    it('Moves the snake direction up by one', () => {
        expect(moveUp([1, 1])).toEqual([0, 1])
        expect(moveUp([2, 2])).toEqual([1, 2])
    })

    // Moves the snake down
    it('Moves the snake direction down by one', () => {
        expect(moveDown([1, 1])).toEqual([2, 1])
        expect(moveDown([2, 2])).toEqual([3, 2])
    })

    // Moves the snake Right
    it('Moves the snake direction left by one', () => {
        expect(moveLeft([1, 1])).toEqual([1, 0])
        expect(moveLeft([1, 2])).toEqual([1, 1])
    })

    // Moves the snake Left
    it('Moves the snake direction right by one', () => {
        expect(moveRight([1, 1])).toEqual([1, 2])
        expect(moveRight([2, 2])).toEqual([2, 3])
    })

    // Creates an array from the grid values
    it('Creates an array of all the alive cells', () => {
        const grid1 = [[0, 0], [0, 1]]
        const grid2 = [[1, 0], [0, 1]]
        const grid3 = [[0, 1, 0], [0, 1, 0], [0, 0, 0]]
        expect(updatedSnakeArray(grid1)).toEqual([[1, 1]])
        expect(updatedSnakeArray(grid2)).toEqual([[0, 0], [1, 1]])
        expect(updatedSnakeArray(grid3)).toEqual([[0, 1], [1, 1]])
    })

    // Moves the snake 
    it('Moves the snake in the specifies direction', () => {
        const grid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
        expect(moveSnake(grid, 'ArrowUp')).toEqual([[0, 1]])
        expect(moveSnake(grid, 'ArrowDown')).toEqual([[2, 1]])
        expect(moveSnake(grid, 'ArrowLeft')).toEqual([[1, 0]])
        expect(moveSnake(grid, 'ArrowRight')).toEqual([[1, 2]])
    })
})