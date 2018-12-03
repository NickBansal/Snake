export const createArray = rows => {
    const arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = Array(rows).fill(0)
    }
    arr[rows/2][rows/2 - 1] = 1
    return arr;
}

export const generateRandomFood = num => {
    const i = Math.floor(Math.random() * num)
    const j = Math.floor(Math.random() * num)
    return [i, j]
}

export const updatedFoodGrid = (grid, foodArray) => {
    grid[foodArray[0]][foodArray[1]] = 2
    return grid
}

export const moveUp = array => [array[0], array[1] + 1]
export const moveDown = array => [array[0], array[1] - 1]
export const moveRight = array => [array[0] + 1, array[1]]
export const moveLeft = array => [array[0] - 1, array[1]]