import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
  const [displayFilter, setDisplay] = useState('')

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
    setDisplay(event.target.value)
  }

  const filteredArr = persons.filter(elem => elem.name.toUpperCase().includes(filter))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={displayFilter} onChange={updateFilter}/>
      <h2> add a new</h2>
      <PersonForm newName={newName} newNum={newNum} 
                  nameChange={updateName} numChange={updateNum} addNote={addNote}/>
      <h2>Numbers</h2>
      <Persons arr={filteredArr}/>
    </div>
  )
}

export default App