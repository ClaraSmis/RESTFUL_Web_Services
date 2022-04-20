import React from "react";

const Person = ({key, person}) =>
{
    return(
        <p>
            {key} {person.number}
        </p>
        
        )
}

export default Person