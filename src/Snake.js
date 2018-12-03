import { createGameBoard, moveSnake, updateGrid, createEmptyGameBoard } from './utils'
import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  state = {
    grid: createGameBoard(30)
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
      </div>
    );
  }

  changeBackground = index => index === 2 ? 'red' :
    index === 1 ? '#fff' : '#34495e'

  handleKeyPress = event => {
    const { grid } = this.state
    const newArray = moveSnake(grid, event)
    const emptyGrid = createEmptyGameBoard(30)
    this.setState({
      grid: updateGrid(emptyGrid, newArray)
    })
  }

}

export default App;
