import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [voteArray, setVote] = useState(Array(anecdotes.length).fill(0))
  const [maxInd, setMaxInd] = useState(0)
  const [max, setMax] = useState(0)

  const getAnecdote = () => {
    const num = Math.floor(Math.random() * anecdotes.length);
    setSelected(num)
  }

  const voteOnAnec = () => {
    const copy = {...voteArray}
    copy[selected]++;
    setVote(copy)
    if (copy[selected] > max) {
      setMaxInd(selected)
      setMax(copy[selected])
    }
  }

  return (
    <div>
      <h2> Anecdote of the day</h2>
      <p> {anecdotes[selected]} </p>
      <p> has {voteArray[selected]} votes</p>
      <button onClick={voteOnAnec}> vote </button>
      <button onClick={getAnecdote}> next anecdote </button>
      <h2> Anecdote with most votes</h2>
      <p> {anecdotes[maxInd]} </p>
      </div>
  )
}

export default App