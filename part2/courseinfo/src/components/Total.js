const Total = ({parts}) => {
  let total = 0;
  for (let i = 0; i < parts.length; i++) {
    total += parts[i].exercises
  }
  return (
    <b> total of {total} exercises </b>
  )
}

export default Total