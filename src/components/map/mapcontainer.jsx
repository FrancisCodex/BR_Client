import React, { useState, useEffect } from 'react';
import Map, { FullscreenControl, GeolocateControl, NavigationControl, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import markericon from '../../assets/marker.svg';

const Mapcontainer = ({onCoordinatesChange}) => {
  const [viewport, setViewport] = useState({
    latitude: 8.958786052217391,
    longitude: 125.59575779584635,
    zoom: 14,
  });

  const [marker, setMarker] = useState({
    latitude: 8.958786052217391,
    longitude: 125.59575779584635,
  });

  const MapBoxToken = import.meta.env.VITE_MAPBOX_API;

  const onMarkerDragEnd = (event) => {
    const longitude = event.lngLat.lng;
    const latitude = event.lngLat.lat;
  
    console.log('Longitude:', longitude);
    console.log('Latitude:', latitude);
  
    if (isNaN(longitude) || isNaN(latitude)) {
      console.error('Invalid longitude or latitude value:', longitude, latitude);
      return;
    }
  
    setMarker({
      longitude: longitude,
      latitude: latitude
    });
    onCoordinatesChange({ longitude, latitude });
  };

  const onGeolocate = (position) => {
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
  
    console.log('Geolocate Longitude:', longitude);
    console.log('Geolocate Latitude:', latitude);
  
    setMarker({
      longitude: longitude,
      latitude: latitude
    });
  
    setViewport({
      ...viewport,
      longitude: longitude,
      latitude: latitude
    });
    onCoordinatesChange({ longitude, latitude });
  };

  const onMapClick = (event) => {
    const longitude = event.lngLat.lng;
    const latitude = event.lngLat.lat;
  
    console.log('Clicked Longitude:', longitude);
    console.log('Clicked Latitude:', latitude);

    if (isNaN(longitude) || isNaN(latitude)) {
      console.error('Invalid longitude or latitude value:', longitude, latitude);
      return;
    }
  
    setMarker({
      longitude: longitude,
      latitude: latitude
    });
    onCoordinatesChange({ longitude, latitude });
  };

  
  useEffect(() => {
    onCoordinatesChange(marker);
  }, [marker, onCoordinatesChange]);

  return (
    <div className='leaflet-container h-96'>
      <Map
        mapboxAccessToken={MapBoxToken}
        {...viewport}
        onMove={evt => setViewport(evt.viewport)}
        onClick={onMapClick}
        mapStyle="mapbox://styles/fr4nz2k/clp9m44i5001d01ol35eicy9f"
      >
        <FullscreenControl />
        <GeolocateControl onGeolocate={onGeolocate}  />
        <NavigationControl />
        <Marker
          draggable
          latitude={marker.latitude}
          longitude={marker.longitude}
          offsetLeft={-20}
          offsetTop={-10}
          onDragEnd={onMarkerDragEnd}
        >
          <img src={markericon} alt="marker" width={30} />
        </Marker>
      </Map>
    </div>
  );
};

export default Mapcontainer;