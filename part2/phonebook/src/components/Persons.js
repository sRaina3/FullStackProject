import Note from './Note'

const Persons = ({arr}) =>
    <div> {arr.map(p => <Note key={p.name} name={p.name} num={p.number}/>)} </div>

export default Persons