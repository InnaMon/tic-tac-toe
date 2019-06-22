import React from 'react';

function Square(props) {
    return(
    <button 
        className="square"
        onClick={props.onClick}
    > 
    {props.value}
    </button>
    );
}

/* ^ arrow function makes function lexically scoped so that 'this' belongs to the Square comp and not the window */
/* every time onClick is triggered, it calls this.setState which manipulates state data, it tells React to re-render and update this.state.value to be 'X' where ever it is clicked on the board */
/*setState automatically updates child components */

export default Square;