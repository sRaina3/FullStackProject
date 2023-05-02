import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import numService from './services/Numbers'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('enter name')
  const [newNum, setNewNum] = useState('enter number')
  const [filter, setFilter] = useState('')
  const [displayFilter, setDisplay] = useState('')

  useEffect(() => {
    console.log('effect')
    numService.getPB()
      .then(nums => {
        console.log('promise fulfilled')
        setPersons(nums)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    if (persons.find(elem => elem.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const objectToAdd = {
        name: newName,
        number: newNum
      }
      numService.addNum(objectToAdd)
        .then(addedNum => {
          console.log('number added')
          setPersons(persons.concat(addedNum))
          setNewName('')
          setNewNum('')
        })
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

  const removeNum = (person) => {
    numService.deleteNum(person.id)
      .then(deletedNum => {
        console.log(`number deleted`)
        setPersons(persons.toSpliced(persons.indexOf(person), 1))
      })
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
      <Persons arr={filteredArr} removeNum={removeNum}/>
    </div>
  )
}

export default App