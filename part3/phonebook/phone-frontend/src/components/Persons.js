import Note from './Note'

const Persons = ({arr, removeNum}) =>
    <div> {arr.map(p => <Note key={p.name} person={p} removeNum={removeNum}/>)} </div>

export default Persons