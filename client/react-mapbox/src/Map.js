import React, { useEffect, useRef, useState } from "react";
import "./Map.scss";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css'; // added 

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = 'pk.eyJ1Ijoia3lsZWRhbm55IiwiYSI6ImNrdnI0bndyYTA0aHozMGx5cXo5ZzV0OGYifQ.qLzQLDWvg8gp0wAIkNeq_A';

const Map = ({ handleCountryNameInput }) => {
  const node = useRef(null);
  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(2);
  const [countryInput, setCountryInput] = useState('')

  useEffect(() => {  
    const map = new mapboxgl.Map({
      container: node.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lng, lat],
      zoom: zoom,
    })

    map.addControl(
      new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      })
      .on('result', (data) => {
        // console.log(data.result.place_name);
        setCountryInput(data.result.place_name);
      })
    );

    map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('body')}));
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
      }));

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleCountryNameInput(countryInput);
  }, [handleCountryNameInput, countryInput])

  return (
    <div className="map-outer-container">
      <div id="geocoder" className="geocoder"></div>
      <div id="map" ref={node} className="mapContainer">
        <div className="sidebarStyle">
          Country: {countryInput} | Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
    </div>
  );
}

export default Map;
