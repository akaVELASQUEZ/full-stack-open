import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search1, setSearch1] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
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
      console.log("true")
      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
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
      <Persons persons={persons} search={search1} />
    </div>
  )
}

export default App