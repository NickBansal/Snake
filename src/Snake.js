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
    // snake: [[12, 12]],
    game: false,
    score: 0,
    movement: null,
    gameOver: false
  }

  render() {
    const { grid, gameOver, score, game } = this.state
    const style = gameOver ? { filter: 'grayscale(100%) opacity(0.2)', transition: '1s' } : null
    return (
      <div 
      className="App" 
      onKeyDown={(e) => this.handleKeyPress(e.key)}
      tabIndex="0">
        <h1 style={style}>Snake</h1>
          <div style={style}>
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
        {!game && !gameOver && <button id="Start" onClick={() => this.handleClick()}>START</button>}
          </div>
          <h1 style={style}>Score: {score}</h1>
        {this.state.gameOver && 
          <div id="ResetModal">
            <h1>Game Over</h1>
            <h2>Final Score: {score}</h2>
            <button onClick={() => this.handleClick()}>RESET</button>
          </div>
        }
      </div>
    );
  }

  handleKeyPress = event => {
    clearInterval(this.interval)
    const { snake, game } = this.state
    if (game) {
      this.interval = setInterval(() => {
        const newGrid = createEmptyGameBoard(25)
        const newSnake = moveSnake(snake, event) 
        this.snakeMovement(newSnake, newGrid, snake)
      }, 80)
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
      clearInterval(this.interval)
      this.setState({
        game: false,
        gameOver: true
      })
    } else {
      this.setState({
        grid: updateGameBoard(newGrid, newSnake, food), 
        snake: newSnake
      })
    }
  }

  handleClick = () => {
    clearInterval(this.interval)
    const snake = [[12, 12]]
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
