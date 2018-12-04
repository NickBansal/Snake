import { 
  createEmptyGameBoard, 
  moveSnake, 
  updateGameBoard, 
  checkSnakeHitWalls,
  checkSnakeHitItself,
  checkSnakeCaughtFood,
  generateRandomFood
} from './utils'
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  state = {
    grid: createEmptyGameBoard(30),
    snake: [[13, 15], [14, 15], [15, 15], [15, 16], [15, 17], [15, 18]],
    game: true
  }

  render() {
    const { grid } = this.state
    return (
      <div 
      className="App" 
      onKeyDown={(e) => this.handleKeyPress(e.key)}
      tabIndex="0">
        <h1>Snake</h1>
          <div>
            {grid.map((item, i) => {
              return (
                <div key={'i'+ i} className="Rows">
                    {item.map((square, j) => {
                        return (
                          <div 
                          key={'j'+ j} 
                          className="Cols"
                          style={{ background: this.changeBackground(square) }}>
                          </div>
                        )
                    })}
                </div>
                )
            })}
          </div>
        <button onClick={() => this.handleClick()}>START</button>
      </div>
    );
  }

  changeBackground = index => index === 2 ? 'red' :
    index === 1 ? '#fff' : '#34495e'

  handleKeyPress = event => {
    const { snake, game } = this.state
    const newGrid = createEmptyGameBoard(30)
    const newSnake = moveSnake(snake, event)
    if (game) {
      this.snakeMovement(newSnake, newGrid, snake)
    }
  }
  
  snakeMovement = (newSnake, newGrid, snakeBody) => {
    const { food } = this.state
    const head = newSnake[newSnake.length - 1]
    const body = snakeBody.slice(0,-1)
    if (checkSnakeCaughtFood(head, food)) {
      newSnake.push(food)
      const newFood = generateRandomFood(31)
      this.setState({
        grid: updateGameBoard(newGrid, newSnake, newFood), 
        snake: newSnake,
        food: newFood
      })
    }
    if (checkSnakeHitWalls(head) || checkSnakeHitItself(head, body)) {
      this.setState({
        game: false
      })
    } else {
      this.setState({
        grid: updateGameBoard(newGrid, newSnake, food), 
        snake: newSnake,
      })
    }
  }

  handleClick = () => {
    const { grid, snake } = this.state
    const food = generateRandomFood(31)
    this.setState({
      grid: updateGameBoard(grid, snake, food),
      food
    })
  }

}

export default App;
