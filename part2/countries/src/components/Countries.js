import React from "react";
import Country from './Country'

const Countries = ({countries, setNewFilter}) => {

    if(countries.length > 10)
    {
        return(
        <strong> Too many matches, specify another filter</strong>
        )
    }
    else if(countries.length > 1 && countries.length <= 10)
    {
        return(
            
             countries.map(country => <p key = {country.name.common}>{country.name.common} <button onClick = {() => setNewFilter(country.name.common)}>show</button></p>)
           
        )

    }
    else if(countries.length === 1)
    {
        return (<Country country={countries[0]}/>)

    }
    else
    {
        return <></>
    }
}

export default Countries