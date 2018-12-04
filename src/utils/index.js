export const createEmptyGameBoard = rows => {
    const arr = [];
    for (let i = 0; i < rows; i++) {
        arr[i] = Array(rows).fill(0)
    }
    return arr;
}

export const updateGameBoard = (grid, changedArray, food) => {
    changedArray.forEach(item => {
        grid[item[0]][item[1]] = 1
    })
    grid[food[0]][food[1]] = 2
    return grid
}

export const generateRandomFood = (num, array) => {
    const i = Math.floor(Math.random() * num)
    const j = Math.floor(Math.random() * num)
    return array.some(item => item[0] === i && item[1] === j) ? generateRandomFood(num, array) : [i, j]
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

export const checkSnakeHitWalls = array => array[0] < 0 || array[1] < 0 || array[0] > 24 || array[1] > 24 ? true : false 

export const checkSnakeHitItself = (head, body) => body.some(item => item[0] === head[0] && item[1] === head[1]) 

export const checkSnakeCaughtFood = (head, food) => head[0] === food[0] && head[1] === food[1] ? true : false

export const changeBackground = index => index === 2 ? 'red' : index === 1 ? '#fff' : '#34495e'







