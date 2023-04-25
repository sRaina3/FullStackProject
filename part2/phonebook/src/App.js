import { useState } from 'react'
import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('enter name')

  const addNote = (event) => {
    event.preventDefault()
    const objectToAdd = {
      name: newName
    }
    setPersons(persons.concat(objectToAdd))
    setNewName('')
  }

  const updateName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={updateName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(p => <Note key={p.name} name={p.name} />)}
      </div>
    </div>
  )
}

export default App