import React, { useState } from 'react';
import Map, { FullscreenControl, GeolocateControl, NavigationControl, Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import markericon from '../../assets/marker.svg';
import schoolicon from '../../assets/school_icon.png'
import Popupdetails from './popupdetails';
import Popupschool from './popupschool';
import { distance } from '@turf/turf';

const Maplisting = ({ properties }) => {
  const [viewport, setViewport] = useState({
    latitude: 8.958786052217391,
    longitude: 125.59575779584635,
    zoom: 14,
  });
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showSchoolPopup, setShowSchoolPopup] = useState(false);
  const MapBoxToken = import.meta.env.VITE_MAPBOX_API;

  const schoolPosition = [125.59571530784112, 8.958781103959806]; // Replace with the coordinates of the school

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

        <Marker 
          latitude={schoolPosition[1]} 
          longitude={schoolPosition[0]} 
          offsetLeft={-20} 
          offsetTop={-50}
        >
          <div onClick={(event) => {
            event.stopPropagation();
            console.log('Popup open');
            setShowSchoolPopup(true);
          }}>
            <img src={schoolicon} alt="School" width={30} />
          </div>
        </Marker>

        {showSchoolPopup && (
          <Popup
            latitude={schoolPosition[1]}
            longitude={schoolPosition[0]}
            onClose={() => {console.log("school popup close"); setShowSchoolPopup(false)}}
            offsetTop={-50}
            offsetLeft={-15}
          >
            <Popupschool/>
          </Popup>
        )}

        {selectedProperty && (
          <Popup
            latitude={selectedProperty.latitude}
            longitude={selectedProperty.longitude}
            onClose={() => {
              console.log('Popup closed');
              setSelectedProperty(null);
            }}
            offsetTop={-50}
            offsetLeft={-15}
          >
            <Popupdetails property={selectedProperty}/>
          </Popup>
        )}

        {properties && properties.map((property) => {
          const propertyPosition = [property.longitude, property.latitude];
          const options = {units: 'kilometers'};
          const distanceToSchool = distance(schoolPosition, propertyPosition, options);

          return (
            <Marker 
              key={property.property_id} 
              latitude={property.latitude} 
              longitude={property.longitude} 
              offsetLeft={-20} 
              offsetTop={-50}
            >
              <div onClick={(event) => {
                event.stopPropagation();
                console.log('Marker clicked', property);
                setSelectedProperty({...property, distanceToSchool});
                setViewport(prev => ({
                  ...prev,
                  latitude: property.latitude,
                  longitude: property.longitude,
                }));
              }}>
                <img src={markericon} alt="Address" width={30} />
              </div>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};

export default Maplisting;