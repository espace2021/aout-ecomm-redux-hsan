import React from "react";
import { MapContainer, TileLayer, Marker , Popup } from 'react-leaflet';
import { Icon } from "leaflet";

function MapLeaflet({locations,Latitude,Longitude,nearestLocation}) {

const icon = new Icon({
    iconUrl: "data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='25' height='41' viewBox='0 0 25 41'><path fill='%23ff0000' d='M12.5 0C5.6 0 0 5.6 0 12.5 0 21.3 12.5 40.7 12.5 40.7S25 21.3 25 12.5C25 5.6 19.4 0 12.5 0zm0 18.7c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2 6.2 2.8 6.2 6.2-2.8 6.2-6.2 6.2z'/></svg>",
    iconSize: [25, 41],
    iconAnchor: [12.5, 41]
});

const defaultIcon = new Icon({
    iconUrl: "data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='25' height='41' viewBox='0 0 25 41'><path fill='%23ffff00' d='M12.5 0C5.6 0 0 5.6 0 12.5 0 21.3 12.5 40.7 12.5 40.7S25 21.3 25 12.5C25 5.6 19.4 0 12.5 0zm0 18.7c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2 6.2 2.8 6.2 6.2-2.8 6.2-6.2 6.2z'/></svg>",
    iconSize: [25, 41],
    iconAnchor: [12.5, 41]
  });
  
const nearestIcon = new Icon({
    iconUrl: "data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' width='25' height='41' viewBox='0 0 25 41'><path fill='%2300ff00' d='M12.5 0C5.6 0 0 5.6 0 12.5 0 21.3 12.5 40.7 12.5 40.7S25 21.3 25 12.5C25 5.6 19.4 0 12.5 0zm0 18.7c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2 6.2 2.8 6.2 6.2-2.8 6.2-6.2 6.2z'/></svg>",
    iconSize: [25, 41],
    iconAnchor: [12.5, 41]
  });

  return (
    <MapContainer center={[locations[0].latitude, locations[0].longitude]} zoom={14} scrollWheelZoom={false}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {
        locations && locations.map((item,ind)=>{ 
        
        const isNearest = nearestLocation && item._id === nearestLocation._id;
    
        return  <Marker position={[item.latitude, item.longitude]} key={ind}
        icon={isNearest ? nearestIcon : defaultIcon} >
        <Popup>
        <img src={item.photo} width={50} height={50} alt={item.name}/>
        <br/> 
        {item.name} <br/> {item.description} 
        </Popup>
      </Marker> 
        })
    }
   {/* Ma position */}
  
   <Marker
          position={[
            Latitude,
            Longitude
          ]}
          icon={icon}
    >
          <Popup>
          I am here 
          </Popup>
    </Marker>

  </MapContainer>
  );
}

export default MapLeaflet;
