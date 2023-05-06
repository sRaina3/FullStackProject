import Country from './Country'
import { useState } from 'react'

const Countries = ({countries}) => {
  const [shownCountries, setShownCountries] = useState([])
  const displayCountry = (c) => {
    if (!shownCountries.includes(c)) {
      setShownCountries(shownCountries.concat(c).filter(c => countries.includes(c)))
    }
  }

  if (countries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else if (countries.length < 3 && countries.length !== 0) {
    const country1 = countries[0]
    if (countries.length > 1) {
      const country2 = countries[1]
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
        {countries.map(c => 
          <div key={c.name.common}> 
            {c.name.common} <button onClick={() => {displayCountry(c)}}>show</button> 
          </div>)}
        <div> {shownCountries.map(elem => <div key={elem.cca2}> <Country c={elem}/> </div>)} </div>
      </div>
    )
  }
}

export default Countries