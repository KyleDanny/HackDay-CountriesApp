import React, { useEffect, useRef, useState } from "react";
import "./Map.scss";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css'; // added 
import * as dotenv from "dotenv";

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
dotenv.config();

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

mapboxgl.accessToken = process.env.API_KEY;

const Map = ({ setCountry, country }) => {
  const node = useRef(null);
  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(2);

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
        setCountry(data.result.place_name);
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


  return (
    <div className="map-outer-container">
      <div id="geocoder" className="geocoder"></div>
      <div id="map" ref={node} className="mapContainer">
        <div className="sidebarStyle">
          Country: {country} | Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
    </div>
  );
}

export default Map;
