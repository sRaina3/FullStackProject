const Country = ({c}) => {
  const langArr = Object.values(c.languages)
  return (
    <div>
      <h1> {c.name.common} </h1>
      <div> capital: {c.capital}</div>
      <div> area: {c.area} km^2</div>
      <h2> languages </h2>
      <div> {langArr.map(elem => <li key={elem}>{elem}</li>)} </div>
      <img src={c.flags.png} alt=''/>
    </div>
  )
}

export default Country