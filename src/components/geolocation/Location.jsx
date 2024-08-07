import { useEffect, useState } from 'react';
import './styleLocation.css';
import MapLeaflet from './MapLeaflet';
import axios from "axios";

function Location() {

  const [locations, setLocations] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3002/api/locations')
      .then((res) => {
              setLocations(res.data);
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
      });
  }, []);


  return (
    <div className="leaflet-container">
      {locations.length > 0 ? (
        <MapLeaflet locations={locations} />
      ) : (
        <p>Loading locations...</p>
      )}
    </div>
  );
}

export default Location;