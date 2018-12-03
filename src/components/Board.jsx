import React, { Component } from 'react'
import { createArray, updatedFoodGrid, generateRandomFood } from '../utils'
import './Board.css'

class Board extends Component {

    state = {
        grid: updatedFoodGrid(createArray(30), generateRandomFood(30))
    }

    render() {
        const { grid } = this.state
        return (
            <div 
            onKeyPress={(e) => this.handleKeyPress(e.key)}
            tabIndex="0">
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
        )
    }
    
    changeBackground = index => index === 2 ? 'red' :
    index === 1 ? '#fff' : '#34495e'

    handleKeyPress = event => {
        console.log(event)
    }

}

export default Board