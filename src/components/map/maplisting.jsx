import React, {useState} from 'react'
import Map, {FullscreenControl, GeolocateControl, NavigationControl, Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const Maplisting = ({ className }) => {
  const [viewport, setViewport] = useState({
    latitude: 8.958786052217391, // add this line
    longitude: 125.59575779584635, // add this line
    zoom: 14,
  });
  const MapBoxToken = import.meta.env.VITE_MAPBOX_API;

  return (
    <div className='absolute inset-0 h-full w-full'>
     <Map
      mapboxAccessToken={MapBoxToken}
      {...viewport}
      onMove={evt => setViewport(evt.viewport)}
      mapStyle="mapbox://styles/fr4nz2k/clp9m44i5001d01ol35eicy9f"
    >

      <FullscreenControl />
      <GeolocateControl />
      <NavigationControl /> 
      <Marker latitude={8.958786052217391} longitude={125.59575779584635} offsetLeft={-20} offsetTop={-10}
      >
        <div>You are here</div>
      </Marker>
    </Map>



    </div>
  )
}

export default Maplisting