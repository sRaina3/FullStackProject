const Note = ({person, removeNum}) => 
  <div>{person.name} {person.num} <button onClick={() => removeNum(person)}>delete</button></div>

export default Note