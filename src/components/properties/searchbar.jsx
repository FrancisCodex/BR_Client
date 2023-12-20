import React, {useState} from 'react'
import Alpine from 'alpinejs'
import Slider from '@mui/material/Slider';

window.Alpine = Alpine

Alpine.start()

const Searchbar = ({ searchTerm, setSearchTerm, selectedAmenities, setSelectedAmenities, selectedType, setSelectedType, priceRange, setPriceRange, propertyTypes }) => {
  const minDistance = 10;
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const [isDropdownMenuOpen1, setIsDropdownMenuOpen1] = useState(false);
  const [isDropdownMenuOpen2, setIsDropdownMenuOpen2] = useState(false);
  const [isDropdownMenuOpen3, setIsDropdownMenuOpen3] = useState(false);
  const [isDropdownMenuOpen4, setIsDropdownMenuOpen4] = useState(false);
  // const [selectedAmenities, setSelectedAmenities] = useState([]);
  // const [selectedType, setSelectedType] = useState('');
  // const [minPrice, setMinPrice] = useState('');
  // const [maxPrice, setMaxPrice] = useState('');

  function valuetext(value) {
    return `${value}°C`;
  }

  // const [priceRange, setPriceRange] = useState([0, 100000]);

  const handleSliderChange = (event, newValue) => {
    if (newValue[0] >= newValue[1] - 2000) {
      setPriceRange([newValue[1] - 2000, newValue[1]]);
    } else if (newValue[1] <= newValue[0] + 2000) {
      setPriceRange([newValue[1], max(newValue[0], newValue[0] + 2000)]);
    } else {
      setPriceRange(newValue);
    }
  };
  
  
    // Amenities filtering

    const handleAmenityChange = (event) => {
      if (event.target.checked) {
        setSelectedAmenities([...selectedAmenities, event.target.value]);
      } else {
        setSelectedAmenities(selectedAmenities.filter(amenity => amenity !== event.target.value));
      }
    };
    
    // 3. Type


    const handleTypeChange = (event) => {
      setSelectedType(event);
    };

  const handleInputChange = (index, event) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = event.target.value === '' ? '' : Number(event.target.value);
  
    if (newPriceRange[0] >= newPriceRange[1] - 2000) {
      setPriceRange([newPriceRange[1] - 2000, newPriceRange[1]]);
    } else if (newPriceRange[1] <= newPriceRange[0] + 2000) {
      setPriceRange([newPriceRange[0], newPriceRange[0] + 2000]);
    } else {
      setPriceRange(newPriceRange);
    }
  };
  
  return (
    <div className="hidden md:block">
      <div className="flex flex-wrap items-end px-5">
      <div className="w-full md:w-2/6 px-1 lg:px-3 mb-6 md:mb-0">
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-green-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="text" placeholder="Search" value={searchTerm} onChange={handleSearch}/>
              </div>
              <div className="w-full md:w-1/6 px-1 lg:px-3 mb-6 md:mb-0">
              <div className="relative">
                    <button className='text-sm font-bold leading-tight bg-red hover:bg-red-light border border-green-400 hover:border-red-light w-full uppercase tracking-wide py-3 px-4 rounded'
                    onClick={() => setIsDropdownMenuOpen2(!isDropdownMenuOpen2)}>
                      Amenities
                    </button>
                    {isDropdownMenuOpen2 && (
                                <div className="dropdown-menu absolute top-full right-0 z-10 w-full rounded-md  bg-white shadow-lg">
                                <input type="text" />
                                  <ul className="py-1 text-sm text-gray-700">
                                    <div className='px-3'>
                                        <input id="default-checkbox" type="checkbox" value="Wifi" onChange={handleAmenityChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="label-text ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Wifi</label>
                                    </div>
                                    <div className='px-3'>
                                    <input id="default-checkbox" type="checkbox" value="parking" onChange={handleAmenityChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="label-text ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Parking</label>
                                    </div>
                                    <div className='px-3'>
                                    <input id="default-checkbox" type="checkbox" value="security" onChange={handleAmenityChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="label-text ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Security</label>
                                    </div>
                                    <div className='px-3'>
                                    <input id="default-checkbox" type="checkbox" value="aircondition" onChange={handleAmenityChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="label-text ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Air Condition</label>
                                    </div>
                                    <div className='px-3'>
                                    <input id="default-checkbox" type="checkbox" value="washer" onChange={handleAmenityChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="label-text ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Washer</label>
                                    </div>
                                    <div className='px-3'>
                                    <input id="default-checkbox" type="checkbox" value="dryer" onChange={handleAmenityChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="label-text ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Dryer</label>
                                    </div>
                                    <div className='px-3'>
                                    <input id="default-checkbox" type="checkbox" value="furnished" onChange={handleAmenityChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="label-text ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Fully Furnished</label>
                                    </div>
                                    <div className='px-3'>
                                    <input id="default-checkbox" type="checkbox" value="kitchen" onChange={handleAmenityChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="label-text ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">kitchen</label>
                                    </div>
                                    <div className='px-3'>
                                    <input id="default-checkbox" type="checkbox" value="elavator" onChange={handleAmenityChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="default-checkbox" className="label-text ms-2 text-sm font-normal text-gray-900 dark:text-gray-300">Elavator</label>
                                    </div>
                                  </ul>
                              </div>
                      )}
                  </div>
              </div>
              <div className="w-full md:w-1/6 px-1 lg:px-3 mb-6 md:mb-0">
                <div className="relative">
                  <button className='text-sm font-bold leading-tight bg-red hover:bg-red-light border border-green-400 hover:border-red-light w-full uppercase tracking-wide py-3 px-4 rounded'
                    onClick={() => setIsDropdownMenuOpen3(!isDropdownMenuOpen3)}>
                    Price
                  </button>
                  {isDropdownMenuOpen3 && (
                    <div className="dropdown-menu absolute top-full right-0 z-10 w-full rounded-md  bg-white shadow-lg">
                    <div className="px-4 py-2">
                      <Slider
                        value={priceRange}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={10000}
                      />
                    </div>
                    <div className="px-4 py-2">
                      <input type="number" placeholder="Min price" value={priceRange[0]} onChange={(e) => handleInputChange(0, e)} />
                    </div>
                    <div className="px-4 py-2">
                      <input type="number" placeholder="Max price" value={priceRange[1]} onChange={(e) => handleInputChange(1, e)} />
                    </div>
                  </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/6 px-1 lg:px-3 mb-6 md:mb-0">
                <div className="relative">
                  <button className='text-sm font-bold leading-tight bg-red hover:bg-red-light border border-green-400 hover:border-red-light w-full uppercase tracking-wide py-3 px-4 rounded'
                  onClick={() => setIsDropdownMenuOpen4(!isDropdownMenuOpen4)}>
                    Type
                  </button>
                  {isDropdownMenuOpen4 && (
                    <div className="dropdown-menu absolute top-full right-0 z-10 w-full rounded-md  bg-white shadow-lg">
                      <ul className="py-1 text-sm text-black">
                        {propertyTypes.map(type => (
                          <li key={type}>
                            <button onClick={() => handleTypeChange(type)} className="block px-4 py-2 hover-bg-gray-100">
                              {type}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/6 px-1 lg:px-3 md:mb-0">
                <button className="font-bold bg-green-700 text-white leading-tight  hover:border-red-light w-full  uppercase tracking-wide py-3 px-4 rounded">Search</button>
              </div>
      </div>
    </div>
  )
}

export default Searchbar