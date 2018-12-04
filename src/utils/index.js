export const createEmptyGameBoard = rows => {
    const arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = Array(rows).fill(0)
    }
    return arr;
}

export const updateGameBoard = (grid, changedArray) => {
    changedArray.forEach(item => {
        grid[item[0]][item[1]] = 1
    })
    return grid
}

export const generateRandomFood = num => {
    const i = Math.floor(Math.random() * num)
    const j = Math.floor(Math.random() * num)
    return [i, j]
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

export const moveSnake = (snakeArray, direction) => {
    const lastSnakeArrayitem = snakeArray[snakeArray.length - 1]
    switch (direction) {
        case 'ArrowUp':
        snakeArray.shift()
        snakeArray.push(moveUp(lastSnakeArrayitem))
        break; 
        case 'ArrowDown':
        snakeArray.shift()
        snakeArray.push(moveDown(lastSnakeArrayitem))
        break;
        case 'ArrowLeft':
        snakeArray.shift()
        snakeArray.push(moveLeft(lastSnakeArrayitem))
        break;
        case 'ArrowRight':
        snakeArray.shift()
        snakeArray.push(moveRight(lastSnakeArrayitem))
        break;
        default:
        return snakeArray
    }
    return snakeArray
}












// export const sortArrayValues = (a, b) => {
//     if (a[0] > b[0]) return -1;
//     else if (a[0] < b[0]) return 1;
//     else if (a[0] === b[0]) {
//         if (a[1] > b[1]) return -1;
//         if (a[1] < b[1]) return 1;
//     }
//     return 0;
// }






