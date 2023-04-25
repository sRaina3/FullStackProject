import { useState } from 'react'
import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', num: '040-123456', id: 1 },
    { name: 'Ada Lovelace', num: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', num: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', num: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('enter name')
  const [newNum, setNewNum] = useState('enter number')
  const [filter, setFilter] = useState('')

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

  const updateFilter = (event) => {
    setFilter(event.target.value.toUpperCase())
  }

  const filteredArr = persons.filter(elem => elem.name.toUpperCase().includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <div> filter shown with <input value={filter} onChange={updateFilter}/></div>
      <h2> add a new</h2>
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
        {filteredArr.map(p => <Note key={p.name} name={p.name} num={p.num}/>)}
      </div>
    </div>
  )
}

export default App