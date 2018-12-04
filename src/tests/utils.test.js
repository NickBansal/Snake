import { 
    updateGameBoard, 
    createEmptyGameBoard,
    moveUp, 
    moveDown,
    moveRight,
    moveLeft,
    updatedSnakeArray,
    moveSnake,
    checkSnakeHitWalls,
    checkSnakeHitItself,
    checkSnakeCaughtFood,
    changeBackground
} from '../utils'


describe('Util fucntions testing', () => {

    // Creates a new empty GameBoard
    it('Checks that create Array return the correct 2D array', () => {
        expect(createEmptyGameBoard(1)).toEqual([[0]])
        expect(createEmptyGameBoard(2)).toEqual([[0, 0], [0, 0]])
        expect(createEmptyGameBoard(3)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]])
    })

    // Updates the gameboard with a snake
    it('Updates the grid with a snake and food', () => {
        const grid = createEmptyGameBoard(2)
        const array = [[1, 1]]
        const food = [0, 0]
        expect(updateGameBoard(grid, array, food)).toEqual([[2, 0], [0, 1]])        
    })
    it('Updates the grid with a snake and food', () => {
        const grid = createEmptyGameBoard(3)
        const array = [[1, 1]]
        const food = [0, 1]
        expect(updateGameBoard(grid, array, food)).toEqual([[0, 2, 0], [0, 1, 0], [0, 0, 0]])        
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
        const snakeArray = [[1, 1], [1, 2]]
        expect(moveSnake(snakeArray, 'ArrowUp')).toEqual([[1, 2], [0, 2]])
        expect(moveSnake(snakeArray, 'ArrowDown')).toEqual([[0, 2], [1, 2]])
        expect(moveSnake(snakeArray, 'ArrowLeft')).toEqual([[1, 2], [1, 1]])
        expect(moveSnake(snakeArray, 'ArrowRight')).toEqual([[1, 1], [1, 2]])
    })
    it('Moves the snake in the specifies direction', () => {
        const snakeArray = [[1, 1], [1, 2]]
        expect(moveSnake(snakeArray, 'ArrowDown')).toEqual([[1, 2], [2, 2]])
        expect(moveSnake(snakeArray, 'ArrowDown')).toEqual([[2, 2], [3, 2]])
        expect(moveSnake(snakeArray, 'ArrowLeft')).toEqual([[3, 2], [3, 1]])
        expect(moveSnake(snakeArray, 'ArrowRight')).toEqual([[3, 1], [3, 2]])
    })
    it('Moves the snake in the specifies direction', () => {
        const snakeArray = [[1, 1], [1, 2], [1, 3]]
        expect(moveSnake(snakeArray, 'ArrowRight')).toEqual([[1, 2], [1, 3], [1, 4]])
        expect(moveSnake(snakeArray, 'ArrowUp')).toEqual([[1, 3], [1, 4], [0, 4]])
        expect(moveSnake(snakeArray, 'ArrowRight')).toEqual([[1, 4], [0, 4], [0, 5]])
        expect(moveSnake(snakeArray, 'ArrowDown')).toEqual([[0, 4], [0, 5], [1, 5]])
    })

    // Check if snake has hit the walls
    it('Check if snake has hit the walls', () => {
        expect(checkSnakeHitWalls([0, 0])).toBe(false)
        expect(checkSnakeHitWalls([0, -1])).toBe(true)
        expect(checkSnakeHitWalls([1, 0])).toBe(false)
        expect(checkSnakeHitWalls([-1, -1])).toBe(true)
    })

    it('Check to see if the snake hit itself', () => {
        const body = [[0, 1], [0, 2], [0, 3]]
        const head1 = [0, 4]
        const head2 = [0, 0]
        const head3 = [0, 1]
        expect(checkSnakeHitItself(head1, body)).toBe(false)
        expect(checkSnakeHitItself(head2, body)).toBe(false)
        expect(checkSnakeHitItself(head3, body)).toBe(true)
    })

    // Check to see if the snake caught the food
    it('Check to see if the snake caught the food', () => {
        expect(checkSnakeCaughtFood([0, 1], [0, 2])).toBeFalsy()
        expect(checkSnakeCaughtFood([0, 1], [0, 1])).toBeTruthy()
    })

    // Modifies the background color
    it('Modifies the background color', () => {
        expect(changeBackground(0)).toBe('#34495e')
        expect(changeBackground(1)).toBe('#fff')
        expect(changeBackground(2)).toBe('red')
        expect(changeBackground(3)).toBeTruthy()
    })
})