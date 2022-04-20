import React from "react";

const PersonForm = ({submit, name, nameChange, number, numberChange}) => 
{
    return (
        <form onSubmit={submit}>
        <div>
          name: <input value= {name} onChange={nameChange}/>
          <div>number: <input value={number} onChange={numberChange} /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm