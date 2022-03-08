/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import "./Map.scss";
import mapboxgl from "!mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'; 
import 'mapbox-gl/dist/mapbox-gl.css';

import dotenv from 'dotenv';
dotenv.config();

mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
mapboxgl.accessToken = `pk.eyJ1Ijoia3lsZWRhbm55IiwiYSI6ImNsMGkxaDFlYjA5NjIzbG1xdm8wN3Z3cjEifQ.pyD123VP3LZrCxN3SCeliQ`;
// process.env.REACT_APP_API_KEY;

const Map = ({ setCountry, country }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(2);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lng, lat],
      zoom: zoom,
    })

    map.current.addControl(
      new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      })
      .on('result', (data) => {
        setCountry(data.result.place_name);
      })
    );

    map.current.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('body')}));
    map.current.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
      }));

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);


  return (
    <div className="map-outer-container">
      <div id="geocoder" className="geocoder"></div>
      <div id="map" ref={mapContainer} className="mapContainer">
        <div className="sidebarStyle">
          Country: {country} | Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
    </div>
  );
}

export default Map;
