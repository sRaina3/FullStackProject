const Countries = ({countries}) => {
  return (
    <div>
      {countries.map(c => <div>{c.name.common}</div>)}
    </div>
  )
}

export default Countries