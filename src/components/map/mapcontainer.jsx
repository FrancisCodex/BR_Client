import React, {useState} from 'react'
import Map, {FullscreenControl, GeolocateControl, NavigationControl, Marker, Popup, Layer} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Mapcontainer = () => {

  const [setPin, setPinState] = useState([]);

  const [propertyData, setPropertyData] = useState({
    address: "",
    type: "",
    amenities: [],
    beds: null,
    rooms: null,
    bathrooms: null,
    price: null,
    longitude: null,
    latitude: null,
  });

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



  const [listingData, setListingData] = useState({
    title: "",
    description: "",
    price: null,
  });


  const [viewport, setViewport] = useState({
    latitude: 8.958786052217391, // add this line
    longitude: 125.59575779584635, // add this line
    zoom: 14,
  });


  console.log("what is the latitude?: ", properties[1].latitude)
  console.log("What is the longitude?: ", properties[1].longitude)
  const MapBoxToken = import.meta.env.VITE_MAPBOX_API;

  return (
    <div className='leaflet-container'>
     <Map
      mapboxAccessToken={MapBoxToken}
      {...viewport}
      onMove={evt => setViewport(evt.viewport)}
      mapStyle="mapbox://styles/fr4nz2k/clp9m44i5001d01ol35eicy9f"
    >

      <FullscreenControl />
      <GeolocateControl />
      <NavigationControl /> 
      <Marker latitude={properties[1].latitude} longitude={properties[1].longitude} offsetLeft={-20} offsetTop={-10}>
        <img src=".." alt={properties[1].address} />
      </Marker>
    </Map>



    </div>
  )
}

export default Mapcontainer