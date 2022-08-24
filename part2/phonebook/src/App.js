import { useState, useEffect } from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search1, setSearch1] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
  
    console.log(personObject)
    console.log(persons)
    console.log(personObject.name)
    console.log(newName)
    if (persons.some(element => element.name === personObject.name)) {
      console.log("false")
      alert(`${newName} is already in phonebook`)
      setNewName("")
      setNewNumber("")
    } else {
      personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName("")
        setNewNumber("")
      })
    }
  }


const deletePerson = (e) => {
  console.log(e.target.value)
  const value = parseInt(e.target.value)
  personService
    .getOne(value)
    .then(response => {
      console.log(response.data)
      return (
        setMessage(`Delete ${response.data.name}`)
      )
    })
  console.log(message)
  if (window.confirm(message)) {
    personService
      .delPerson(value)
      .then(() => {
        setPersons(persons.filter((element) => element.id !== value ))
      })
    
  }
}

const nameChange = (e) => {
  console.log(e.target.value)
  
  return (
    setNewName(e.target.value)
  )
}

const numChange = (e) => {
  console.log(e.target.value)
  return (
    setNewNumber(e.target.value)
  )
}

const searchType = e => {
  console.log(e.target.value)
  console.log(persons.filter(element => element.name.includes(search1)))
  return (
    setSearch1(e.target.value)
  )
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search1} handleSearch={searchType} />

      <h1>Add New</h1>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName}
        nameChange={nameChange}
        newNumber={newNumber}
        numChange={numChange}
      />
      
      <h2>Numbers</h2>
      <Persons persons={persons} search={search1} deletePerson={deletePerson} />
    </div>
  )
}

export default App