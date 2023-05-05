import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {
  const [countries, setCountries] = useState([])
  const [displayCountries, setDisplayCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('Got response')
        setCountries(response.data)
      })
  }, [])

  const updateDisplay = () => {
    setDisplayCountries(countries.filter(c => c.name.includes(filter)))
  }

  return (
    <div>
      <form onSubmit>
        <div>
          <div>find countries <input></input></div>
        </div>
      </form>
      {countries.map(c => <div>{c.name.common}</div>)}
    </div>
  )
}

export default App;
