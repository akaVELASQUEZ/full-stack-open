const PersonForm = (props) => {
    return (
      <form onSubmit={props.addPerson}>
          <div>
            <p>name: <input value={props.newName} onChange={props.nameChange}/></p>
            <p>number: <input value={props.newNumber} onChange={props.numChange}/></p>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
      </form>
    )
}

export default PersonForm