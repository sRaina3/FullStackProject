import Country from './Country'

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
          <Country c={country1}/>
          <Country c={country2}/>
        </div>
      )
    } else {
      return (
        <div>
          <Country c={country1}/>
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