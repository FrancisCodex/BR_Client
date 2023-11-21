import React from 'react'
import Featuredcard from './cards/featuredcard'
import Navbar from './navbar/navbar'
import Hero from './home/hero'
import FeaturedList from './home/featuredlist'
import Card from './cards/card'
import Cardtest from './cards/cardtest'
import {useNavigate} from 'react-router-dom';
import Footer from './footer'
import '../styles/home.css'
import realtor from '../assets/realtor2.png'
export default function Home() {

  const navigate = useNavigate();

  const navigateToListings = () => {
    // 👇️ navigate to /contacts
    navigate('/listings');
  };

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
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <div>
        <Navbar/>
        <div className='bg-slate-300'>
            <Hero/>
            <hr />
        </div>

        {/* Listing Featured Properties */}
        <div className="featured-listings py-10">
          <h1 className='text-3xl pl-10 font-bold uppercase'>Featured Listings</h1>
          <p className='pl-10 font-medium text-gray-700'>Popular Properties</p>
          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-6 p-10">
              {properties.map((property) => (
                <Card key={property.id} property={property} />
              ))}
            </div>
            <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={navigateToListings}>
              View More
            </button>
          </div>
        </div>
        
        <div>
            <Footer/>
        </div>
    </div>
  )
}


        
