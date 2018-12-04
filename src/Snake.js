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
    game: false,
    score: 0,
    movement: null,
    gameOver: false
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
        {this.state.gameOver && <h1>Game Over</h1>}
      </div>
    );
  }

  handleKeyPress = event => {
    const { snake, game } = this.state
    if (game) {
      const newGrid = createEmptyGameBoard(25)
      const newSnake = moveSnake(snake, event) 
      this.snakeMovement(newSnake, newGrid, snake, event)
    }
  }
  
  snakeMovement = (newSnake, newGrid, snakeBody, direction) => {
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
        score: this.state.score + 1,
        direction,
      })
    }
    if (checkSnakeHitWalls(head) || checkSnakeHitItself(head, body)) {
      this.setState({
        game: false,
        gameOver: true
      })
    } else {
      this.setState({
        grid: updateGameBoard(newGrid, newSnake, food), 
        snake: newSnake,
        direction
      })
    }
  }

  handleClick = () => {
    const snake = [[15, 15]]
    const food = generateRandomFood(25, snake)
    this.setState({
      grid: updateGameBoard(createEmptyGameBoard(25), snake, food),
      snake,
      food,
      score: 0,
      game: true,
      gameOver: false 
    })
  }

}

export default App;
