import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'




const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState("")
  




  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        if(newFilter !== ""){
          const countriesToShow = response.data.filter(country =>
            country.name.common.toLowerCase().includes(newFilter.toLowerCase())
          )
            setCountries(countriesToShow)
        }
      })
  }, [newFilter])  




  const handleNewFilter = (event) =>
  {
    setNewFilter(event.target.value)
  }
  
  return (
    <div>
      find countries : <input value = {newFilter} onChange = {handleNewFilter}></input>  
      {!countries ? null : <Countries countries={countries} setNewFilter = {setNewFilter}/>}    
      
    </div>
  )
}

export default App;
