import React, { useState, useEffect } from 'react';

import './App.scss';
import Navbar from './Navbar';
import Map from './Map';
import Cards from './Cards';

const App = () => {
  const [country, setCountry] = useState('');
  const [countryInfo, setCountryInfo] = useState('');

  const fetchFromAPI = async (countryName) => {
    await fetch(`https://countries-app-server.herokuapp.com/${countryName}`)
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
      });
  }

  useEffect(() => {
    if (country) {
      fetchFromAPI(country);
    }
  }, [country]);

  return (
    <div className="App">
      <Navbar />
      <Map country={country} setCountry={setCountry} />
      <Cards countryInfo={countryInfo} />
    </div>
  );
}

export default App;
