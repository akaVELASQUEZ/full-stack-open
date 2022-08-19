import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
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
    } else {
      console.log("true")
      setPersons(persons.concat(personObject))
      setNewName("")
    }
  }

const nameChange = (e) => {
  console.log(e.target.value)
  return (
    setNewName(e.target.value)
  )
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={nameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return (
          <p key={person.id} >{person.name}</p>
        )
      })}
    </div>
  )
}

export default App