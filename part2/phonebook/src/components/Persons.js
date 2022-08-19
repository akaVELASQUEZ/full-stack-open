const Persons = ({persons, search}) => {
    return (
      <>
        {persons.filter((element) => element.name.includes(search)).map((person) => {
          return (
            <p key={person.id} >{person.name}   {person.number}</p>
          )
        })}
      </>
    )
}

export default Persons
  