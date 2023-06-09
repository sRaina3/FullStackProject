import axios from 'axios'
import { useState, useEffect } from 'react'
import Countries from './components/Countries'

const App = () => {
  const buttonStyle = {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24
  }
  
  const appBackground = {
    backgroundColor: 'darkGray'
  }
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('Got response')
        setCountries(response.data)
      })
  }, [])

  const updateFilter = (event) => setFilter(event.target.value.toUpperCase())


  const filteredCountries = countries.filter(c => c.name.common.toUpperCase().includes(filter))

  return (
    <div style={appBackground}>
      <div style={buttonStyle}>find countries <input onChange={updateFilter}/></div>
      <Countries countries={filteredCountries}/>
    </div>
  )
}

export default App;
