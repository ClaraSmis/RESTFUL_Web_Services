import React from "react";

const Persons = ({persons, onclick}) =>
{
    return(

        persons.map(person => <p key = {person.id}> {person.name} {person.number} <button onClick = {() => onclick(person.id, person.name)}>delete</button> </p>)
        
    )
}

export default Persons