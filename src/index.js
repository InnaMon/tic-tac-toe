import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return(
    <button 
        className="square"
        onClick={props.onClick}
    > 
    {props.value}
    {console.log(props)}
    </button>
    );
}

/* ^ arrow function makes function lexically scoped so that 'this' belongs to the Square comp and not the window */
/* every time onClick is triggered, it calls this.setState which manipulates state data, it tells React to re-render and update this.state.value to be 'X' where ever it is clicked on the board */
/*setState automatically updates child components */

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    //Board is parent of Square
    renderSquare(i) {
        return (
          <Square 
            value={this.state.squares[i]} 
            onClick={() => this.handleClick(i)}
          /> 
        );
    }
    /*Board instructs each individual Square about its current value ('X', 'O', or null) */
    /* In React, it’s conventional to use on[Event] names for props which represent events and handle[Event] for the methods which handle the events. */

    render() {
        const status = 'Next player: X';

        return(
            <div> 
                <div className="status">{status}</div>
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

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TO DO */}</ol>
                </div>
            </div>
        );
    }
}

// =======================================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);