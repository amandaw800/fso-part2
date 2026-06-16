import CountryDisplay from './CountryDisplay'
import { useState } from 'react'
const FilterResults = ({countries, country}) => {

  const [showCountryInfo, setShowCountryInfo] = useState(null)

  const filterCountries = () => {
  const inputLowercase = country.toLowerCase() //user input

  return (
    countries.filter(country => 
      country.name.common.toLowerCase().includes(inputLowercase)
    )
  )
  
 }

   const lengthCheck = (filteredInput) => {


    if(filteredInput.length === 1){ 
      const countryToDisplay = filteredInput[0]
      console.log(countryToDisplay)
      
      return (
        <CountryDisplay countryToDisplay={countryToDisplay}/>
      )


    } else if(filteredInput.length >= 10){
      return <div>Too many matches, specify another filter</div>

    } 

    return (
      filteredInput.map(country => 
        <div key={country.cca3}>{country.name.common} 
       {/*<button onClick={() => setShowCountryInfo(showCountryInfo === country.name.common ? null : country.name.common)}>Show</button> 
            {showCountryInfo === country.name.common && (
      <CountryDisplay countryToDisplay={country} />)} */}
     </div>
        
      )

    )
  }
    return (
    <div>
 
        {lengthCheck(filterCountries())}


        
      </div>
    )
    
}



export default FilterResults