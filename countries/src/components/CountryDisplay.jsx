const CountryDisplay = ({countryToDisplay}) => {
    return (
        <div>
          <h1>{countryToDisplay.name.common}</h1>
          <p>Capital: {countryToDisplay.capital.map(cap => cap).join(', ')}</p>
          <p>Area: {countryToDisplay.area} sq km</p>
          <h2>Languages</h2>
          <ul>{Object.values(countryToDisplay.languages).map((lang, index) => <li key={index}>{lang}</li>)}</ul>
          <img src={countryToDisplay.flags.png} alt={countryToDisplay.flags.alt}/>

        </div>
    )

}

export default CountryDisplay