export const createArray = rows => {
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