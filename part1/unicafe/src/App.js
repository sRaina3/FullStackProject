import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  if (good + bad + neutral > 0) {
    let positiveVal = (good / (good + neutral + bad) * 100)
    positiveVal += ' %'
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text='good' value={good} />
            <StatisticsLine text='neutral' value={neutral} />
            <StatisticsLine text='bad' value={bad} />
            <StatisticsLine text='all' value={good + neutral + bad} />
            <StatisticsLine text='average' value={(good - bad) / (good + neutral + bad)} />
            <StatisticsLine text='positive' value={positiveVal} />
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = () => setGood(good + 1)
  const updateBad = () => setBad(bad + 1)
  const updateNeutral = () => setNeutral(neutral + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={updateGood} text='good'/>
      <Button handleClick={updateNeutral} text='neutral'/>
      <Button handleClick={updateBad} text='bad'/>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App