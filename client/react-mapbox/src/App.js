import React, { useState, useEffect } from 'react';

import './App.scss';
import Navbar from './Navbar';
import Map from './Map';
// import Bookmarked from './Bookmarked';
import Cards from './Cards';

const App = () => {
  const [country, setCountry] = useState('');
  const [countryInfo, setCountryInfo] = useState();

  // https://countries-app-server.herokuapp.com
  const fetchFromAPI = async (countryName) => {
    await fetch(`/${countryName}`)
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
      });
  }

  useEffect(() => {
    if (country) {
      console.log(country)
      fetchFromAPI(country);
    }
  }, [country]);

  return (
    <div className="App">
      <Navbar />
      <Map country={country} setCountry={setCountry} />
      {/* <Bookmarked /> */}
      <Cards countryInfo={countryInfo} />
    </div>
  );
}

export default App;
