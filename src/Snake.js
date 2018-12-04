import { 
  createEmptyGameBoard, 
  changeBackground,
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
    grid: createEmptyGameBoard(25),
    snake: [[15, 15]],
    game: true,
    score: 0
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
                          style={{ background: changeBackground(square) }}>
                          </div>
                        )
                    })}
                </div>
                )
            })}
          </div>
          <h1>Score: {this.state.score}</h1>
        <button onClick={() => this.handleClick()}>START</button>
      </div>
    );
  }

  handleKeyPress = event => {
    const { snake, game } = this.state
    const newGrid = createEmptyGameBoard(25)
    const newSnake = moveSnake(snake, event)
    if (game) {
      this.snakeMovement(newSnake, newGrid, snake)
    }
  }
  
  snakeMovement = (newSnake, newGrid, snakeBody) => {
    const { food, snake } = this.state
    const head = newSnake[newSnake.length - 1]
    const body = snakeBody.slice(0,-1)

    if (checkSnakeCaughtFood(head, food)) {
      newSnake.push(food)
      const newFood = generateRandomFood(25, snake)
      this.setState({
        grid: updateGameBoard(newGrid, newSnake, newFood), 
        snake: newSnake,
        food: newFood,
        score: this.state.score + 1
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
    const food = generateRandomFood(25, snake)
    this.setState({
      grid: updateGameBoard(grid, snake, food),
      food
    })
  }

}

export default App;
