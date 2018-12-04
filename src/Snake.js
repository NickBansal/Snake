import { 
  createEmptyGameBoard, 
  moveSnake, 
  updateGameBoard, 
  checkSnakeHitWalls,
  checkSnakeHitItself
} from './utils'
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  state = {
    grid: createEmptyGameBoard(30),
    snake: [[13, 15], [14, 15], [15, 15], [15, 16], [15, 17], [15, 18]],
    game: true,
    direction: null
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
    const head = newSnake[newSnake.length - 1]
    const body = snakeBody.slice(0,-1)
   
    if (checkSnakeHitWalls(head) || checkSnakeHitItself(head, body)) {
      this.setState({
        game: false
      })
    } else {
      this.setState({
        grid: updateGameBoard(newGrid, newSnake), 
        snake: newSnake,
      })
    }
  }

  handleClick = () => {
    const { grid, snake } = this.state
    this.setState({
      grid: updateGameBoard(grid, snake)
    })
  }

}

export default App;
