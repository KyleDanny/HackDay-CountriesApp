import React from 'react';
import './Cards.scss';

const Cards = ({ countryInfo }) => {
  console.log(countryInfo)
  
  const display = () => {
    if (countryInfo !== undefined) {
      return (
      <div className="parent">
        {/* <div className="div1 card"> 
          <img className="img-flag" src={countryInfo.data.flags.png} alt="flag" ></img> 
        </div>
        <div className="div2 card"> 
        <div>
          <h1> Common: {countryInfo.name.common} </h1>
          <h2> Official: {countryInfo.name.official} </h2>
        </div>
        </div>
        <div className="div3 card"> 
          <img className="img-coat" src={countryInfo.coatOfArms.png} alt="flag"></img> 
        </div>
        <div className="div4 card">
          
            <h2> <i class="fas fa-globe-africa"></i> &nbsp; Country Info </h2>
            <p> Continent: {countryInfo.continents[0]} </p>
            <p> Capital: {countryInfo.capital.map(el => el).join(', ')} </p>
            <p> Sub-region: {countryInfo.subRegion} </p>
          
        </div>
        <div className="div5 card">
          <div>
            <h2> <i class="fas fa-ellipsis-h"></i> &nbsp; Alternate Names </h2>
            {countryInfo.altSpellings.map(el => <p key={(Math.floor(Math.random() * 1000))}> {el} </p> )}
          </div>
        </div>
        <div className="div6 card">
          <div>
            <h2> <i class="far fa-sticky-note"></i> &nbsp; Facts </h2>
            <p> Currency: {
            Object.keys(countryInfo.currencies).map((keyName, keyIndex) => {
              return countryInfo.currencies[keyName].name}).join(', ')
            }
            </p>
            <p> Symbol: {
            Object.keys(countryInfo.currencies).map((keyName, keyIndex) => {
              return countryInfo.currencies[keyName].symbol}).join(', ')
            }
            </p>
            <p> Population: {countryInfo.population} </p>
          </div>
        </div>
        <div className="div7 card">
          <div>
            <h2> <i class="far fa-question-circle"></i> &nbsp; True or False </h2>
            <p> Independent: {countryInfo.independent ? 'True' : 'False' } </p>
            <p> Landlocked: {countryInfo.landlocked ? 'True' : 'False' } </p>
            <p> Member of UN: {countryInfo.unMember ? 'True' : 'False' } </p>
          </div>
        </div>
        <div className="div8 card">
          <div>
            <h2> <i class="fas fa-language"></i> &nbsp; Languages </h2>
            {
              Object.keys(countryInfo.languages).map((keyName, keyIndex) => {
                return countryInfo.languages[keyName]}).join(', ')
            }
            </div>
          </div>
        <div className="div9 card">
          <div>
            <h2> <i class="far fa-copy"></i> &nbsp; Fun Facts </h2>
            <p> Which side of the road: {countryInfo.car.side[0].toUpperCase() + countryInfo.car.side.substring(1)} </p>
            <p> Start of the Week: {countryInfo.startOfWeek[0].toUpperCase() + countryInfo.startOfWeek.substring(1)} </p>
            <p> Internet Domain: {countryInfo.tld} </p>
            <p> Fifa Handle: {countryInfo.fifa} </p>
          </div>
        </div> */}
      </div>
      )
    }
  }

  return(
    <div>{display()}</div> 
  )
}

export default Cards;