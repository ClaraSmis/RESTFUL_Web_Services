import React from 'react';


const Country = ({ country }) => {


    return (
      <>
        <h1>{country.name.common}</h1>
        <span>Capital {country.capital}</span>
        <br></br>
        <span>Area {country.area}</span>
        <br></br>
        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages).map(language => <li key={language}> {language}</li>)}
        </ul>
        <img src={country.flags.png} alt={country.name.common} width='150px' height = '100px' />
        
      </>
    )
  }

  export default Country