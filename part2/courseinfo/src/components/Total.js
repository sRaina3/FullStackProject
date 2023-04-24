const Total = ({parts}) => {
  let total = parts.reduce((tot, cur) => tot + cur)
  return (
    <b> total of {total} exercises </b>
  )
}

export default Total