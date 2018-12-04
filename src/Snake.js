import { createEmptyGameBoard, moveSnake, updateGameBoard } from './utils'
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  state = {
    grid: createEmptyGameBoard(30),
    snake: [[15, 15], [15, 16], [15, 17], [15, 18]],
    game: false,
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
    const { snake, direction } = this.state
    if (clearInterval(this.state.changeMovement)) {
      clearInterval(this.state.changeMovement)
    }
    
    const changeMovement = setInterval(() => {
      const newSnake = !direction ? moveSnake(snake, event) : moveSnake(snake, direction)
      const newGrid = createEmptyGameBoard(30)
      this.setState({
        grid: updateGameBoard(newGrid, newSnake), 
        snake: newSnake,
        changeMovement
      })
    }, 100)

  }

  handleClick = () => {
    const { grid, snake } = this.state
    this.setState({
      grid: updateGameBoard(grid, snake)
    })
  }

}

export default App;
