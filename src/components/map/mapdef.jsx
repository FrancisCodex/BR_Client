import React from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const center = [8.958706680077857, 125.59572465422714]
const cord = [8.957185758151928, 125.59251768753913]
const Mapdef = () => {
    const properties = [
        {
          latitude: 8.960661884634652,
          longitude: 125.59669120453086,
          address: "Eiffel Tower",
          price: 100,
        },
        {
          latitude: 8.957185758151928,
          longitude: 125.59251768753913,
          address: "Arc de Triomphe",
          price: 120,
        },
      ];


  return (
    <div className='leaflet-container'>
        <MapContainer center={center} zoom={13.5}>

      
    <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"      
    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"/>

        {properties.map((property) => (
            <Marker key={property.address} position={[property.latitude, property.longitude]}>
            <Popup>
                <div>
                <h3>{property.address}</h3>
                <p>{property.price}</p>
                </div>
            </Popup>
            </Marker>
        ))}
        </MapContainer>
        </div>
  )
}

export default Mapdef
