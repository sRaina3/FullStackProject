import Part from './Part'

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part name={part.name} ex={part.exercises}/>)}
    </div>
  )
}

export default Content