import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decremnt = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div class="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-btn" onClick={decremnt}>Decremnt</button>
            <button className="counter-btn" onClick={increment}>Increment</button>
            <button className="counter-btn" onClick={reset}>Reset</button>

        </div>
    )



}
export default Counter