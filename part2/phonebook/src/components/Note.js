const Note = ({person, removeNum}) => 
  <div>{person.name} {person.number} <button onClick={() => removeNum(person)}>delete</button></div>

export default Note