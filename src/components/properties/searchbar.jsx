import React, {useState} from 'react'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()


const Searchbar = () => {
  const [isDropdownMenuOpen1, setIsDropdownMenuOpen1] = useState(false);
  const [isDropdownMenuOpen2, setIsDropdownMenuOpen2] = useState(false);
  const [isDropdownMenuOpen3, setIsDropdownMenuOpen3] = useState(false);
  const [isDropdownMenuOpen4, setIsDropdownMenuOpen4] = useState(false);
  
  return (
    <div>
      <div className="flex flex-wrap items-end px-5">
      <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="text" placeholder="Butuan City" />
              </div>
              <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <div className="relative">
                    <button className='font-bold leading-tight bg-red hover:bg-red-light border border-black hover:border-red-light w-full uppercase tracking-wide py-3 px-4 rounded'
                    onClick={() => setIsDropdownMenuOpen1(!isDropdownMenuOpen1)}>
                      City
                    </button>
                    {isDropdownMenuOpen1 && (
                                <div className="dropdown-menu absolute top-full right-0 z-10 w-full rounded-md  bg-white shadow-lg">
                                  <input type="text" />
                                    <ul className="py-1 text-sm text-gray-700">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover-bg-gray-100">Butuan City</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover-bg-gray-100">Cabadbaran</a>
                                        </li>
                                    </ul>
                                </div>
                      )}
                  </div>
              </div>
              <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <div className="relative">
                    <button className='font-bold leading-tight bg-red hover:bg-red-light border border-black hover:border-red-light w-full uppercase tracking-wide py-3 px-4 rounded'
                    onClick={() => setIsDropdownMenuOpen2(!isDropdownMenuOpen2)}>
                      Amenities
                    </button>
                    {isDropdownMenuOpen2 && (
                                <div className="dropdown-menu absolute top-full right-0 z-10 w-full rounded-md  bg-white shadow-lg">
                                  <input type="text" />
                                    <ul className="py-1 text-sm text-gray-700">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover-bg-gray-100">Wifi</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover-bg-gray-100">Parking</a>
                                        </li>
                                    </ul>
                                </div>
                      )}
                  </div>
              </div>
              <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
              <div className="relative">
                    <button className='font-bold leading-tight bg-red hover:bg-red-light border border-black hover:border-red-light w-full uppercase tracking-wide py-3 px-4 rounded'
                    onClick={() => setIsDropdownMenuOpen3(!isDropdownMenuOpen3)}>
                      Price
                    </button>
                    {isDropdownMenuOpen3 && (
                                <div className="dropdown-menu absolute top-full right-0 z-10 w-full rounded-md  bg-white shadow-lg">
                                  <input type="text" />
                                    <ul className="py-1 text-sm text-gray-700">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover-bg-gray-100">Max</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover-bg-gray-100">Min</a>
                                        </li>
                                    </ul>
                                </div>
                      )}
                  </div>
              </div>
              <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                  <div className="relative">
                    <button className='font-bold leading-tight bg-red hover:bg-red-light border border-green-400 hover:border-red-light w-full uppercase tracking-wide py-3 px-4 rounded'
                    onClick={() => setIsDropdownMenuOpen4(!isDropdownMenuOpen4)}>
                      Property Type
                    </button>
                    {isDropdownMenuOpen4 && (
                                <div className="dropdown-menu border border-green-400 absolute top-full right-0 z-10 w-full rounded-md  bg-white shadow-lg">
                                    <ul className="py-1 text-sm text-gray-700">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover-bg-gray-100">Boarding House</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover-bg-gray-100">Apartment</a>
                                        </li>
                                    </ul>
                                </div>
                      )}
                  </div>
              </div>
              <div className="w-full md:w-1/6 px-3 md:mb-0">
                <button className="font-bold bg-emerald-500 text-white leading-tight  hover:border-red-light w-full  uppercase tracking-wide py-3 px-4 rounded">Search</button>
              </div>
      </div>
    </div>
  )
}

export default Searchbar