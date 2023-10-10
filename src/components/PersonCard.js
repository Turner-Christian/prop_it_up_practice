import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor} = props;
    const [ userAge, setUserAge ] = useState(parseInt(age));

    return (
        <div>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {userAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => setUserAge(userAge + 1)}>Birthday Button</button>
        </div>
    )
}

export default PersonCard;