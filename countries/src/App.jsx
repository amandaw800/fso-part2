import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'






const App = () => {

  const [country, setCountry] = useState("") //for each country in the search bar
  const [countries, setCountries] = useState([]) //set the countries to display

  useEffect(() =>{
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(res => {
      setCountries(res.data)
      console.log(res.data)
      

      
    })

  }, [])

  const handleNewCountry = (event) => {
  setCountry(event.target.value)

  }


  return(
    <div>
      <SearchBar onChange={handleNewCountry} text={"find countries"} inputId="search"/>
      <div>
        {countries.map(country =>( 
          <div key={country.cca3}>{country.name.common}</div>
        ))}
        
      </div>

    </div>
  )
 
}





export default App