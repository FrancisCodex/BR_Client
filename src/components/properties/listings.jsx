import React from 'react';
import Mapdef from '../map/mapdef';
import Card from '../cards/card';
import Navbar from '../navbar/navbar';
import Searchbar from './searchbar';
import realtor from '../../assets/realtor2.png';
import Navigation from '../navbar/navigation';
import Maplisting from '../map/maplisting';
import Cardtest from '../cards/cardtest';

const Listings = () => {

  const properties = [
    {
      id: 1,
      title: "Property 1",
      description: "3 bedroom 1 bathroom apartment",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 5025.12,
      persons: 2,
      bathrooms: 1,
      rooms: 2,
      type: "Apartment",
      renter: "Donald Trump",
      address: "1252 Golden State, Butuan City",
      realtor: realtor

    },
    {
      id: 2,
      title: "Property 2",
      description: "4 bedroom 1 bathroom apartment, Shared Bathroom",
      image: "https://images.unsplash.com/photo-1560185009-5bf9f2849488?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 4500.51,
      persons: 4,
      bathrooms: 1,
      rooms: 2,
      type: "Apartment",
      renter: "Gerald Oswalt",
      address: "1413 Libertad, Butuan City",
      realtor: realtor

    },
    {
      id: 3,
      title: "Property 3",
      description: "2 bedroom 2 bathroom apartment",
      image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 4800.42,
      persons: 4,
      bathrooms: 1,
      rooms: 1,
      type: "Boarding House",
      renter: "Gerald Oswalt",
      address: "2314 Los Angeles, Butuan City",
      realtor: realtor

    },
    {
      id: 4,
      title: "Property 3",
      description: "2 bedroom 2 bathroom apartment",
      image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 4850.23,
      persons: 6,
      bathrooms: 2,
      rooms: 2,
      type: "Boarding House",
      renter: "Gerald Oswalt",
      address: "1521 New York Dakota, Butuan City",
      realtor: realtor

    },
  ];


  return (
    <div className='h-screen overflow-hidden'>
      <Navigation/>
        <div className="listings-container">
            <div className="flex flex-col">
                <div className="searchbar pt-4">
                <Searchbar/>
                </div>
                <div className="flex screenSize">
                {/* Left Side */}
                <div className="relative w-full pl-2 lg:w-6/12 lg:mx-0 mt-5 inset-0">
                  <Maplisting  />
                </div>

                {/* Right Side */}
                <div className='flex-1 flex h-full'>
                    <div className="flex-1 w-full overflow-y-scroll lg:w-6/12 mx-2 mt-5">
                        <div className="h-60">
                          <div className='pl-3'>
                            <h1 className='font-bold text-2xl'>Available Rental Listings</h1>
                            {/* How many Properties that are listed */}
                            <p className='text-zinc-600 font-medium'>{properties.length} Properties listed</p>
                          </div>
                            <div className="columns-2 w-full gap-2 pt-3">
                                {properties.map((property) => (
                                <Cardtest key={property.id} property={property}/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="my-4"/>
                </div>

                </div>
            </div>
            </div>
    </div>
  );
};

export default Listings;
