import React, { useState } from 'react';

function MyCom() {
    let [name, setName] = useState();
    const [age, setAge] = useState(0);
    const updateName = () => {
        setName("dilan");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const DecrementAge = () => {
        setAge(age - 1);

    }

    const Reset = () => {
        setAge(0);
    }

    return (
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set name</button>

            <p>Age : {age}</p>
            <button onClick={incrementAge}>increment Age</button>
            <button onClick={DecrementAge}>Decrement Age</button>
            <button onClick={Reset}>reset</button>
        </div>
    );
}
export default MyCom