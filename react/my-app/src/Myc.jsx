import React, { useState } from 'react';
function Myc() {

    let [name, setName] = useState();
    const updateName = () => {
        setName("hello");
    }

    return (
        <div>
            <p>name :{name}</p>
            <button onClick={updateName}>set name</button>
        </div>
    );
}
export default Myc;