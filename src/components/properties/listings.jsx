import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Maplisting from '../map/maplisting';
import Cardtest from '../cards/cardtest';
import Navigation from '../navbar/navigation';
import Searchbar from './searchbar';
import axios from 'axios';
import instance from '../../hooks/useRefreshToken';
import Mobilenav from '../navbar/mobilenav';
import { useListing } from '../../hooks/useListing';
import '../../styles/listings.css';

const Listings = () => {
  const {
    property,
    isDropdownMenuOpen,
    setIsDropdownMenuOpen,
    isNavVisible,
    setIsNavVisible,
    lastScrollPos,
    setLastScrollPos,
    scrollContainerRef,
    setSortOrder,
    sortOrder,
  } = useListing();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  const propertyTypes = property ? Array.from(new Set(property.map(p => p.property_type))) : [];

  const filteredProperties = property ? property.filter((property) =>
  (!searchTerm || (property.description && property.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
  (property.listing_name && property.listing_name.toLowerCase().includes(lowerCaseSearchTerm)) ||
  (property.city && property.city.toLowerCase().includes(lowerCaseSearchTerm)) ||
  (property.address && property.address.toLowerCase().includes(lowerCaseSearchTerm))) &&
  (!selectedAmenities.length || (property.amenities && property.amenities.some(amenity => selectedAmenities.includes(amenity.toLowerCase())))) &&
  (!selectedType || (property.property_type && property.property_type.toString().toLowerCase() === selectedType.toLowerCase())) &&
  (property.price && property.price >= priceRange[0] && property.price <= priceRange[1])
) : [];

useEffect(() => {
  // Fetch and sort data here
}, [sortOrder]);

  console.log("What is the property in listing: ", property);
  return (
    <div className='h-screen'>
        <Navigation />
        
      <div className="listings-container">
        <div className="flex flex-col">
          <div className="searchbar pt-0 md:pt-4">
          <Searchbar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm}
            selectedAmenities={selectedAmenities} 
            setSelectedAmenities={setSelectedAmenities} 
            selectedType={selectedType} 
            setSelectedType={setSelectedType} 
            priceRange={priceRange} 
            setPriceRange={setPriceRange}
            propertyTypes={propertyTypes} 
          />
          </div>
          <div className="flex screenSize">
            {/* Left Side */}
            <div className="relative w-full pl-2 lg:w-6/12 lg:mx-0 mt-5 inset-0 lg:block hidden">
              <Maplisting properties={property}/>
            </div> 
  
            {/* Right Side */}
            <div className='flex-1 flex h-full  sm:mb-10'>
              <div className="flex-1 w-full overflow-y-scroll lg:w-6/12 mx-2 mt-5" ref={scrollContainerRef}>
                <div className="h-60">
                <div className='pl-3'>
                  <h1 className='font-bold text-2xl'>Available Rental Listings</h1>
                  {/* How many Properties that are listed */}
                  <div className="flex items-center justify-between py-0">
                    <p className='text-zinc-600 font-medium'>{(searchTerm ? filteredProperties : property)?.length} Properties listed</p>
                    <div className="relative">
                      <button  onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)} className="flex text-black bg-gray-200 items-center justify-end w-40 text-sm font-semibold text-left bg-transparent rounded-lg ">
                        <span>Sort by</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" className={`w-4 h-4 transition-transform duration-200 transform ${isDropdownMenuOpen ? 'rotate-180' : ''}`}>
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {isDropdownMenuOpen &&(
                        <div className="absolute z-50 w-full  origin-top-right">
                        <div className="px-2 pt-2 pb-2 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                          <div className="flex flex-col">
                            <a className="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200 " href="#" onClick={() => setSortOrder('lowest')}>
                              <div className>
                                <p className="font-semibold">Lowest Price</p>
                              </div>
                            </a>
                            <a className="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200 " href="#" onClick={() => setSortOrder('highest')}>
                              <div className>
                                <p className="font-semibold">Highest Price</p>
                              </div>
                            </a>
                            <a className="flex flex-row items-start rounded-lg bg-transparent p-2 hover:bg-gray-200 " href="#">
                              <div className>
                                <p className="font-semibold">Top Rating</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      )}
                      </div> 
                    </div>

                  </div>
                  <div className="grid-columns-2 w-full gap-2 pt-3">
                    {filteredProperties.map((property) => (
                      <Cardtest key={property.property_id} property={property} imageUrl={property.imageUrl} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="my-4"/>
            </div>
  
          </div>
        </div>
      </div>
      {isNavVisible && (
        <div className='lg:hidden z-99'>
          <Mobilenav/>
        </div>
      )}
    </div>
  );
};

export default Listings;
