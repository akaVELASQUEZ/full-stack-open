const Persons = ({persons, search, deletePerson}) => {
    return (
      <>
        {persons.filter((element) => element.name.includes(search)).map((person) => {
          return (
            <p key={person.id} >
              {person.name}   {person.number}   
              <button onClick={deletePerson} value={person.id}>Delete</button>
            </p>
          )
        })}
      </>
    )
}

export default Persons
  