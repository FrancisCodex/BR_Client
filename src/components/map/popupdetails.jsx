import React, {useState, useEffect} from 'react'
import { Rating } from '@mui/material';

const Popupdetails = ({property}) => {
    const imageUrl = `http://localhost:8080/api/property/img/${property.property_id}/${property.image_name}`;

    const propertyLink = () => {
        window.location.href = `/property/${property.property_id}`;
      }

  return (
    <div>
        <div className="max-w-lg mx-auto">
            <div className="bg-white max-w-sm">
                <a href="#" onClick={propertyLink}>
                <img className="rounded-t-lg" src={imageUrl} alt="property_image" />
                </a>
                <div className="" >
                <a href="#" onClick={propertyLink}>
                    <h5 className="text-gray-900 font-bold text-sm tracking-tight mb-2">{property.listing_title}</h5>
                    <p>Property Type: {property.property_type}, Bedrooms: {property.num_bedrooms}</p>
                    <p className="font-bold text-black mb-2">Php {property.price} / month</p>
                    <p className="font-bold text-black">
                    Ratings : {property.average_rating} <Rating name="read-only" value={property.average_rating} readOnly size='small'/>
                    </p>
                </a>
                <p className="font-normal text-gray-700 mb-2 line-clamp-2">{property.property_description}</p>
                <p className="font-bold text-black mb-2">{property.address}, {property.city}</p>
                <p className="font-bold text-black mb-2">Distance to school: {property.distanceToSchool.toFixed(2)} km</p>
                <button className="text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" onClick={propertyLink}>
                    View Property
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popupdetails