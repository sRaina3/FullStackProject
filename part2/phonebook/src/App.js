import { useState } from 'react'
import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', num: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('enter name')
  const [newNum, setNewNum] = useState('enter number')

  const addNote = (event) => {
    event.preventDefault()
    if (persons.find(elem => elem.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const objectToAdd = {
        name: newName,
        num: newNum
      }
      setPersons(persons.concat(objectToAdd))
      setNewName('')
      setNewNum('')
    }
  }

  const updateName = (event) => {
    setNewName(event.target.value)
  }

  const updateNum = (event) => {
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          <div>name: <input value={newName} onChange={updateName}/></div>
          <div>number: <input value={newNum} onChange={updateNum}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(p => <Note key={p.name} name={p.name} num={p.num}/>)}
      </div>
    </div>
  )
}

export default App