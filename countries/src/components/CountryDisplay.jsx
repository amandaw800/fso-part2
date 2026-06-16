import axios from 'axios'
import { useState, useEffect } from 'react'

const CountryDisplay = ({countryToDisplay, isActive, onClick}) => {
    const api_key= import.meta.env.VITE_WEATHER_KEY 

    const [weather, setWeather] = useState(null)
   

    
    useEffect(() =>{
        const getLatLng = countryToDisplay.capitalInfo.latlng

        if(!getLatLng){
            return
        }
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${getLatLng[0]}&lon=${getLatLng[1]}&appid=${api_key}`)
        
        .then(
            res => {
                setWeather(res.data)
                console.log(res.data)
            }
        ).catch( () =>
            console.log("An error has occured")
        )

    }, [])
        
   





    return (
        <>
         { isActive ? (
        <>
        <div>
          <h1>{countryToDisplay.name.common}</h1>
          <p>Capital: {countryToDisplay.capital.map(cap => cap).join(', ')}</p>
          <p>Area: {countryToDisplay.area} sq km</p>
          <h2>Languages</h2>
          <ul>{Object.values(countryToDisplay.languages).map((lang, index) => <li key={index}>{lang}</li>)}</ul>
          <img src={countryToDisplay.flags.png} alt={countryToDisplay.flags.alt}/>
        </div>

        <div>
            <h1>Weather in {countryToDisplay.capital}</h1>
            {
               
                weather ? 
                <>
                <p>Temperature: {`${(((weather.main.temp-273.15) * 1.8) +32).toFixed(2)} F`}</p>

                <img src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0]["icon"]}.png`} />
                <p>Wind {weather.wind.speed} m/s</p>
                </>
                :
                <p>Getting temp</p>
                


            }
        </div>
        </>

        
        ) : (
                <button onClick={onClick}>Show</button>
            )}
        </>
    )

}

export default CountryDisplay