import { useState } from 'react'

const Button = ({ handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <p>{text}: {value}</p>
  )
}

const Statistics = (props) => {
  let stats = props.stats
  if (stats.all === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No Feedback Given</p>
      </>
    )
  }
  return (
    <>
      <h1>Statistics</h1>
      <StatisticLine text="Good" value={stats.good} />
      <StatisticLine text="Neutral" value={stats.neutral} />
      <StatisticLine text="Bad" value={stats.bad} />
      <StatisticLine text="All" value={stats.all} />
      <StatisticLine text="Average" value={stats.average} />
      <StatisticLine text="Positive" value={stats.positive} />
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
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
      <Statistics stats={stats} />
    </div>
  )
}

export default App