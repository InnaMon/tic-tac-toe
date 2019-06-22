import React from 'react';
import Square from './Square';

class Board extends React.Component {
    //Board is parent of Square
    renderSquare(i) {
        return (
          <Square 
            value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)}
          /> 
        );
    }
    /*Board instructs each individual Square about its current value ('X', 'O', or null) */
    /* In React, it’s conventional to use on[Event] names for props which represent events and handle[Event] for the methods which handle the events. */

    render() {
        return(
            <div> 
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;