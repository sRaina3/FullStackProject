const PersonForm = ({newName, newNum, numChange, nameChange, addNote}) => {
  return (
    <form onSubmit={addNote}>
      <div>
        <div>name: <input value={newName} onChange={nameChange}/></div>
        <div>number: <input value={newNum} onChange={numChange}/></div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm