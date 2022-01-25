import React, { useState, useEffect } from 'react';

import './App.scss';
import Navbar from './Navbar';
import Map from './Map';
import Bookmarked from './Bookmarked';
import Cards from './Cards';

const App = () => {
  const [country, setCountry] = useState('');
  const [countryInfo, setCountryInfo] = useState();

  const handleCountryNameInput = formInput => setCountry(formInput);

  const fetchFromAPI = async (countryName) => {
    await fetch(`https://countries-app-server.herokuapp.com/${countryName}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data.data[0])
        const jsonData = {
          name: data.data[0].name, 
          altSpellings: data.data[0].altSpellings,
          continents: data.data[0].continents,
          subRegion: data.data[0].subregion,
          capital: data.data[0].capital,
          independent: data.data[0].independent,
          unMember: data.data[0].unMember,
          landlocked: data.data[0].landlocked,
          languages: data.data[0].languages,
          population: data.data[0].population,
          currencies: data.data[0].currencies,
          coatOfArms: data.data[0].coatOfArms,
          flags: data.data[0].flags,
          car: data.data[0].car,
          fifa: data.data[0].fifa,
          startOfWeek: data.data[0].startOfWeek,
          tld: data.data[0].tld,
        }
        setCountryInfo(jsonData);
      });
  }

  useEffect(() => {
    if (country) {
      console.log(country)
      handleCountryNameInput(country);
      fetchFromAPI(country);
    }
  }, [country]);

  return (
    <div className="App">
      <Navbar />
      <Map handleCountryNameInput={handleCountryNameInput} />
      {/* <Bookmarked /> */}
      <Cards countryInfo={countryInfo} />
    </div>
  );
}

export default App;
