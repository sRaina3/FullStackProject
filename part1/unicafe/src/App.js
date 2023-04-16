import { useState } from 'react'

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
      <button onClick={updateGood}>good</button>
      <button onClick={updateNeutral}>neutral</button>
      <button onClick={updateBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good - bad) / (good + neutral + bad)} </p>
      <p>positive {good / (good + neutral + bad) * 100}%</p>
    </div>
  )
}

export default App