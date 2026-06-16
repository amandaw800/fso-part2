import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import FilterResults from './components/FilterResults'






const App = () => {

  const [country, setCountry] = useState("") //for each country the user inputs into the search bar
  const [countries, setCountries] = useState([]) //for each country that is given from the API 

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

 const filterCountries = () => {
  const inputLowercase = country.toLowerCase() //user input



  return (
    countries.filter(country => 
      country.name.common.toLowerCase().includes(inputLowercase)
    )
  )
  
 }


  return(
    <div>
      <SearchBar onChange={handleNewCountry} text={"find countries"} inputId="search"/>
      <FilterResults countries={countries} country={country}/>

    </div>
  )
 
}





export default App