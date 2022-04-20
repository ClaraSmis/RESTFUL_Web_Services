import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'
import './index.css'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSuccess, setSuccess] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => { 
        setPersons(initialPersons)
      })
  }, [])

  const PersonstoShow = newFilter.length === 0 ? persons : persons.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) >= 0)


  const addnewPerson = (event) => {
    event.preventDefault()
    const PersonObject = { name: newName, number: newNumber }
    const actualPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    
    if (actualPerson && actualPerson.name === newName  && actualPerson.number !== newNumber) {
      if(window.confirm(`${actualPerson.name} is already added to the phonebook, replace the old number with a new one ?`))
      {
        const ChangedPerson = {...actualPerson, number: newNumber}
          personService
          .update(ChangedPerson.id, ChangedPerson)
          .then(ReturnedPerson => {
            setPersons(persons.map(person => person.id !== actualPerson.id ? person : ReturnedPerson))
            setSuccess(`${ReturnedPerson.name} was updated successfully`)
            setTimeout(()=> {
            setSuccess(null)
          }, 5000)
            setNewName("")
            setNewNumber("")
          })  
      }

    }
   else if(actualPerson && actualPerson.name === newName && actualPerson.number ===newNumber)
    {
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      setNewNumber("")
    }
    else{
      personService
        .create(PersonObject)
        .then(returnPerson => {
          setPersons(persons.concat(returnPerson))
          setSuccess(`${returnPerson.name} was added successfully`)
          setTimeout(()=> {
            setSuccess(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        }) 

    }
    
      
    
  }

  const deletePerson = (id, name) =>
  {
    
      if(window.confirm(`Delete ${name} ?`))
      {
        personService
          .remove(id)
          .then(()=> {
          setPersons(persons.filter((person) => person.id !== id))
          setSuccess(`${name} was deleted successfully`)
          setTimeout(()=> {
            setSuccess(null)
          }, 5000)
        })
      }


  }

  const handleNamechange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberchange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) => {
    setNewFilter(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>

      <Notification success={newSuccess}/>

      <Filter filter={newFilter} filterChange={handleNewFilter} />

      <h2>Add a new</h2>
      <PersonForm submit={addnewPerson} name={newName} nameChange={handleNamechange} number={newNumber} numberChange={handleNumberchange} />

      <h2>Numbers</h2>
      <Persons persons={PersonstoShow} onclick= {deletePerson} />

    </div>
  )
}

export default App