import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search1, setSearch1] = useState('')
  

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
       filter shown with <input value={search1} onChange={searchType} />
      <form onSubmit={addPerson}>
        <div>
          <h1>Add New</h1>
          <p>name: <input value={newName} onChange={nameChange}/></p>
          <p>number: <input value={newNumber} onChange={numChange}/></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter((element) => element.name.includes(search1)).map((person) => {
        return (
          <p key={person.id} >{person.name}   {person.number}</p>
        )
      })}
    </div>
  )
}

export default App