import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        value: null
    };
}

    render() {
        return (
          <button className="square"
          onClick={() => this.setState({value: 'X'})}
          > 
            {this.state.value}
            {console.log(this.state)}
          </button>
        );
    }
}

/* ^ arrow function makes function lexically scoped so that 'this' belongs to the Square comp and not the window */

class Board extends React.Component {
    //Board is parent of Square
    renderSquare(i) {
        return <Square value={i}/> //value is a property of Board, pass into Sqaure so it has access to it
    }

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