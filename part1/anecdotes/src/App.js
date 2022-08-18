import { useState } from 'react'

const Button = ({handleClick, text}) => {
  console.log({handleClick, text})
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const length = anecdotes.length
  let initial = new Uint8Array(length)
  const [selected, setSelected] = useState(0)
  const [allvotes, setVotes] = useState(initial)

  
  const random_int = () => {
    return (
      setSelected((Math.floor(Math.random() * length)))
    )
  }

  
  const voting = () => {
    const points = allvotes
    const copy = [...points]
    copy[selected] += 1
    return (
      setVotes(copy)
    )
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {allvotes[selected]} votes</p>
      <Button handleClick={voting} text="Vote"/>
      <Button handleClick={random_int} text="Next Anecdote"/>
    </div>
  )
}

export default App