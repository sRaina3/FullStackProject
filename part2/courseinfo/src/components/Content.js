import Part from './Part'
import Total from './Total'

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} name={part.name} ex={part.exercises}/>)}
      <Total parts={parts.map(part => part.exercises)}/>
    </div>
  )
}

export default Content