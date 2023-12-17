import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../hooks/useRefreshToken';
import Navbar from '../navbar/navbar';
import Navigation from '../navbar/navigation';

const Propertypage = () => {
    const [property, setProperty] = useState(null);
  const [propertyImage, setPropertyImage] = useState(null);
  const { propertyId } = useParams();

  console.log("What is the property id: ", propertyId);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await instance.get(`/api/property/${propertyId}`);
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
  
  return (
    <div>
        <div className="container">
            <div className="grid second-nav">
                <div className="column-xs-12">
                <nav>
                    <ol className="breadcrumb-list">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Household Plants</a></li>
                    <li className="breadcrumb-item">{propertyId}</li>
                    </ol>
                </nav>
                </div>
            </div>
            <div className="grid product">
                <div className="column-xs-12 column-md-7">
                <div className="product-gallery">
                    <div className="product-image">
                    <img className="active" src="https://source.unsplash.com/W1yjvf5idqA" />
                    </div>
                    <ul className="image-list">
                    <li className="image-item"><img src="https://source.unsplash.com/W1yjvf5idqA" /></li>
                    <li className="image-item"><img src="https://source.unsplash.com/VgbUxvW3gS4" /></li>
                    <li className="image-item"><img src="https://source.unsplash.com/5WbYFH0kf_8" /></li>
                    </ul>
                </div>
                </div>
                <div className="column-xs-12 column-md-5">
                <h1>Bonsai</h1>
                <h2>$19.99</h2>
                <div className="description">
                    <p>The purposes of bonsai are primarily contemplation for the viewer, and the pleasant exercise of effort and ingenuity for the grower.</p>
                    <p>By contrast with other plant cultivation practices, bonsai is not intended for production of food or for medicine. Instead, bonsai practice focuses on long-term cultivation and shaping of one or more small trees growing in a container.</p>
                </div>
                <button className="add-to-cart">Add To Cart</button>
                </div>
            </div>
            <div className="grid related-products">
                <div className="pt-5 text-3xl">
                <h3>You may also like</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-6 p-10">
                    <div className="column-xs-12 column-md-4">
                    <img src="https://source.unsplash.com/miziNqvJx5M" />
                    <h4>Succulent</h4>
                    <p className="price">$19.99</p>
                    </div>
                    <div className="column-xs-12 column-md-4">
                    <img src="https://source.unsplash.com/2y6s0qKdGZg" />
                    <h4>Terranium</h4>
                    <p className="price">$19.99</p>
                    </div>
                    <div className="column-xs-12 column-md-4">
                    <img src="https://source.unsplash.com/6Rs76hNbIWE" />
                    <h4>Cactus</h4>
                    <p className="price">$19.99</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Propertypage





// <div className='propertyimage'>
//         <div className="carousel">
//         <img src={propertyImage} alt="" />
//         </div>
//       </div>

//       <div className="propertydetails">
//         <h1>{property.propertyDetails.address}</h1>
//       </div>

//       <div className="propertydescription">
//         <h3>Description</h3>
//         <p>{property.propertyDetails.property_description}</p>
//       </div>

//       <div className="contact">

//       </div>

// const properties = [
//     {
//       id: 0,
//       title: "Property 0",
//       description: "2 bedroom 2 bathroom apartment",
//       image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: 4850.23,
//       persons: 6,
//       bathrooms: 2,
//       rooms: 2,
//       type: "Boarding House",
//       renter: "Gerald Oswalt",
//       address: "1521 New York Dakota, Butuan City",
//       realtor: realtor

//     },
//     {
//       id: 1,
//       title: "Property 1",
//       description: "3 bedroom 1 bathroom apartment",
//       image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: 5025.12,
//       persons: 2,
//       bathrooms: 1,
//       rooms: 2,
//       type: "Apartment",
//       renter: "Donald Trump",
//       address: "1252 Golden State, Butuan City",
//       realtor: realtor

//     },
//     {
//       id: 2,
//       title: "Property 2",
//       description: "4 bedroom 1 bathroom apartment, Shared Bathroom",
//       image: "https://images.unsplash.com/photo-1560185009-5bf9f2849488?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: 4500.51,
//       persons: 4,
//       bathrooms: 1,
//       rooms: 2,
//       type: "Apartment",
//       renter: "Gerald Oswalt",
//       address: "1413 Libertad, Butuan City",
//       realtor: realtor

//     },
//     {
//       id: 3,
//       title: "Property 3",
//       description: "2 bedroom 2 bathroom apartment",
//       image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: 4800.42,
//       persons: 4,
//       bathrooms: 1,
//       rooms: 1,
//       type: "Boarding House",
//       renter: "Gerald Oswalt",
//       address: "2314 Los Angeles, Butuan City",
//       realtor: realtor

//     },
//     {
//       id: 4,
//       title: "Property 3",
//       description: "2 bedroom 2 bathroom apartment",
//       image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: 4850.23,
//       persons: 6,
//       bathrooms: 2,
//       rooms: 2,
//       type: "Boarding House",
//       renter: "Gerald Oswalt",
//       address: "1521 New York Dakota, Butuan City",
//       realtor: realtor

//     },
//   ];