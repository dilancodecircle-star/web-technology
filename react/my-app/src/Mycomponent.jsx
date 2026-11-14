import React, { useState } from 'react';
function Mycomponent() {

    let [name, setName] = useState();
    const updateName = () => {
        setName("Dinuli suvi");
    }

    return (
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name{name} </button>

        </div>
    );

}
export default Mycomponent;