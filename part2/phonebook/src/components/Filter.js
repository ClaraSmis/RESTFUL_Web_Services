import React from "react";

const Filter = ({filter, filterChange}) => 
{
    return(
    <div>
        Filter shown with: <input value={filter} onChange={filterChange} />
    </div>
    )
}

export default Filter