import React from 'react';
import './Cards.scss';

const Cards = ({ countryInfo }) => {
  
  const display = () => {
    if (countryInfo !== "") {
      const country = countryInfo.data;

      return (
      <div className="info-container">
        
        <div className="div1"> 
          <img className="img-flag" src={country.flags.png} alt="flag" ></img> 
        </div>

        <div className="div2"> 
          <h1> Common: {country.name.common} </h1>
          <h2> Official: {country.name.official} </h2>
        </div>

        <div className="div3"> 
          <img className="img-coat" src={country.coatOfArms.png} alt="flag"></img> 
        </div>

        <div className="div4">
            <h2> <i class="fas fa-globe-africa"></i> &nbsp; Country Info </h2>
            <p> Continent: {country.continents[0]} </p>
            <p> Capital: {country.capital.map(el => el).join(', ')} </p>
            <p> Sub-region: {country.subRegion} </p>
        </div>

        <div className="div5">
          <h2> <i class="fas fa-ellipsis-h"></i> &nbsp; Alternate Names </h2>
          {country.altSpellings.map(el => <p key={(Math.floor(Math.random() * 1000))}> {el} </p> )}
        </div>

        <div className="div6">
          <h2> <i class="far fa-sticky-note"></i> &nbsp; Facts </h2>
          <p> Currency: {
          Object.keys(country.currencies).map((keyName, keyIndex) => {
            return country.currencies[keyName].name}).join(', ')
          }
          </p>
          <p> Symbol: {
          Object.keys(country.currencies).map((keyName, keyIndex) => {
            return country.currencies[keyName].symbol}).join(', ')
          }
          </p>
          <p> Population: {countryInfo.population} </p>
        </div>

        <div className="div7">
          <h2> <i class="far fa-question-circle"></i> &nbsp; True or False </h2>
          <p> Independent: {country.independent ? 'True' : 'False' } </p>
          <p> Landlocked: {country.landlocked ? 'True' : 'False' } </p>
          <p> Member of UN: {country.unMember ? 'True' : 'False' } </p>
        </div>

        <div className="div8">
          <h2> <i class="fas fa-language"></i> &nbsp; Languages </h2>
          <p>
          {
            Object.keys(country.languages).map((keyName, keyIndex) => {
              return country.languages[keyName]}).join(', ')
          }
          </p>
        </div>

        <div className="div9">
          <h2> <i class="far fa-copy"></i> &nbsp; Fun Facts </h2>
          <p> Which side of the road: {country.car.side[0].toUpperCase() + country.car.side.substring(1)} </p>
          <p> Start of the Week: {country.startOfWeek[0].toUpperCase() + country.startOfWeek.substring(1)} </p>
          <p> Internet Domain: {country.tld} </p>
          <p> Fifa Handle: {country.fifa} </p>
        </div>
        
      </div>
      )
    }
  }

  return(
    <div>{display()}</div> 
  )
}

export default Cards;