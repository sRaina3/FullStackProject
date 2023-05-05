const Countries = ({countries}) => {
  if (countries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else if (countries.length < 3 && countries.length !== 0) {
    const country1 = countries[0]
    const langArr1 = Object.values(country1.languages)
    if (countries.length > 1) {
      const country2 = countries[1]
      const langArr2 = Object.values(country2.languages)
      return (
        <div>
          <h1> {country1.name.common} </h1>
          <div> capital: {country1.capital}</div>
          <div> area: {country1.area} km^2</div>
          <h2> languages </h2>
          <div> {langArr1.map(elem => <li key={elem}>{elem}</li>)} </div>
          <img src={country1.flags.png} alt=''/>
  
          <div>
          <h1> {country2.name.common} </h1>
          <div> capital: {country2.capital}</div>
          <div> area: {country2.area} km^2</div>
          <h2> languages </h2>
          <div> {langArr2.map(elem => <li key={elem}>{elem}</li>)} </div>
          <img src={country2.flags.png} alt=''/>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h1> {country1.name.common} </h1>
          <div> capital: {country1.capital}</div>
          <div> area: {country1.area} km^2</div>
          <h2> languages </h2>
          <div> {langArr1.map(elem => <li key={elem}>{elem}</li>)} </div>
          <img src={country1.flags.png} alt=''/>
        </div>
      )
    }
  } else {
    return (
      <div>
        {countries.map(c => <div key={c.name.common}> {c.name.common} </div>)}
      </div>
    )
  }
}

export default Countries