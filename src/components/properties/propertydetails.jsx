import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../hooks/useRefreshToken';
import Navbar from '../navbar/navbar';
import Navigation from '../navbar/navigation';
import Footer from '../footer';
import '../../styles/prop.scss'
import Reviewsection from './reviewsection';
import OwnerCard from './ownerCard';
import Contactform from './contactform';

const PropertyDetails = () => {
  const [property, setProperty] = useState(null);
  const [propertyImage, setPropertyImage] = useState(null);
  const [ownerdetails, setOwnerdetails] = useState(null);
  const { propertyId } = useParams();

  
  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await instance.get(`/api/property/view/${propertyId}`);
        console.log("What is the response: ", response.data);
        setProperty(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPropertyDetails();
  }, [propertyId]);

  useEffect(() => {
    const fetchOwnerDetails = async () => {
      try {
        if (property && property.propertyDetails) {
          const response = await instance.get(`/api/property/owner/${property.propertyDetails.user_id}`);
          setOwnerdetails(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchOwnerDetails();
  }, [property]);

  const filename = property?.imageDetails.image_name;
  console.log("what is the image name: ", filename);

  useEffect(() => {
    const fetchPropertyImage = async () => {
      try {
        if (property && property.imageDetails && property.imageDetails.image_name) {
          const filename = property.imageDetails.image_name;
          const response = await instance.get(`/api/property/img/${propertyId}/${filename}`, { responseType: 'arraybuffer' });
          const arrayBufferView = new Uint8Array(response.data);
          const blob = new Blob([arrayBufferView], { type: response.headers['content-type'] });
          const imageUrl = URL.createObjectURL(blob);
          console.log("what is the imageUrl: ", imageUrl);
          setPropertyImage(imageUrl);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPropertyImage();
  }, [property, propertyId]);

  if (!property || !propertyImage) {
    return <div>Loading...</div>;
  }

  console.log("What is the property: ", property);
  
  return (
    <div>
      <Navigation />

      <div className="container">
            <div className="grid second-nav">
                <div className="column-xs-12">
                <nav>
                    <ol className="breadcrumb-list">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/listings">Property Listings</a></li>
                    <li className="breadcrumb-item active">{property.propertyDetails.address}</li>
                    </ol>
                </nav>
                </div>
            </div>
            <div className="grid product">
                <div className="column-xs-12 column-md-7">
                <div className="product-gallery">
                    <div className="product-image">
                    <img className="active" src={propertyImage} alt='House Image' />
                    </div>
                    {/* <ul className="image-list">
                    <li className="image-item"><img src="https://source.unsplash.com/W1yjvf5idqA" /></li>
                    <li className="image-item"><img src="https://source.unsplash.com/VgbUxvW3gS4" /></li>
                    <li className="image-item"><img src="https://source.unsplash.com/5WbYFH0kf_8" /></li>
                    </ul> */}
                </div>
                </div>
                <div className="column-xs-12 column-md-5">
                <span className='bg-green-500 py-2 px-2 rounded text-white text-sm w-28'>for Rent</span>
                <h2 className='text-black text-2xl inline px-5'>₱{property.propertyDetails.price}/M</h2>
                <div className="description">
                    <p>{property.propertyDetails.property_description}</p>
                </div>
                <h2 className='text-xl font-extrabold'>Amenities</h2>
                <div className="amenities space-y-2 gap-2 pb-3 md:w-48 md:flex">
                  {property.propertyDetails.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center px-4 py-2 border border-gray-300 rounded shadow-sm text-sm font-semibold text-black bg-white capitalize">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586l-1.293-1.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {amenity}
                    </div>
                  ))}
                </div>
                <OwnerCard ownerdetails={ownerdetails}/>
                  {/* <button className="add-to-cart bg-green-800">Contact Owner</button>     */}
                  <Contactform/>
                </div>
                <div className='reviewsection'>
                <Reviewsection propertyId={propertyId}/>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  );
};

export default PropertyDetails;