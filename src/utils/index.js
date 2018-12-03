export const createGameBoard = rows => {
    const index = Math.floor(rows/2)
    const arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = Array(rows).fill(0)
    }
    arr[index][index] = 1
    return arr;
}

export const createEmptyGameBoard = rows => {
    const arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = Array(rows).fill(0)
    }
    return arr;
}

export const generateRandomFood = num => {
    const i = Math.floor(Math.random() * num)
    const j = Math.floor(Math.random() * num)
    return [i, j]
}

export const updatedGridWithNewFood = (grid, foodArray) => {
    grid[foodArray[0]][foodArray[1]] = 2
    return grid
}

export const updateGrid = (grid, changedArray) => {
    changedArray.forEach(item => {
        grid[item[0]][item[1]] = 1
    })
    return grid
}


export const moveLeft = array => [array[0], array[1] - 1]
export const moveRight = array => [array[0], array[1] + 1]
export const moveUp = array => [array[0] - 1, array[1]]
export const moveDown = array => [array[0] + 1, array[1]]

export const updatedSnakeArray = grid => {
    const result = []
    grid.forEach((col, i) => {
        col.forEach((row, j) => {
            if (row === 1) {
                result.push([i, j])
            }
        })
    })
    return result
}

export const moveSnake = (grid, direction) => {
    const snakeArray = updatedSnakeArray(grid)
    const lastSnakeArrayitem = snakeArray[snakeArray.length - 1]
    const newArray = []
    switch (direction) {
        case 'ArrowUp':
        newArray.push(moveUp(lastSnakeArrayitem))
        break;
        case 'ArrowDown':
        newArray.push(moveDown(lastSnakeArrayitem))
        break;
        case 'ArrowLeft':
        newArray.push(moveLeft(lastSnakeArrayitem))
        break;
        case 'ArrowRight':
        newArray.push(moveRight(lastSnakeArrayitem))
        break;
        default:
        return snakeArray
    } 
    return newArray
}
