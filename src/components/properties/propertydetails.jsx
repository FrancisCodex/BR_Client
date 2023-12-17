import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../hooks/useRefreshToken';
import Navbar from '../navbar/navbar';
import Navigation from '../navbar/navigation';
import Footer from '../footer';
import '../../styles/prop.scss'
import Reviewsection from './reviewsection';
import OwnerCard from './ownerCard';

const PropertyDetails = () => {
  const [property, setProperty] = useState(null);
  const [propertyImage, setPropertyImage] = useState(null);
  const { propertyId } = useParams();

  console.log("What is the property id: ", propertyId);

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
                  <button className="add-to-cart bg-green-800">Contact Owner</button>    
                </div>
                <div className='reviewsection'>
                    <Reviewsection/>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  );
};

export default PropertyDetails;