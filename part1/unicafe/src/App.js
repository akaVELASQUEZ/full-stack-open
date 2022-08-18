import { useState } from 'react'

const Statistics = (props) => {
  let stats = props.stats
  return (
    <>
      <h1>Statistics</h1>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
      <p>All: {stats.all}</p>
      <p>Average: {stats.average}</p>
      <p>Positive: {stats.positive}%</p>
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: good + neutral + bad,
    average: (good - bad)/(good + neutral + bad),
    positive: (good / (good + neutral + bad)) * 100
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <Statistics stats={stats} />
    </div>
  )
}

export default App