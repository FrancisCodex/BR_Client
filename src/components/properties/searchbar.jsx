import React, {useState} from 'react'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()


const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <div className="flex flex-wrap items-end px-5">
      <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-black rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="text" placeholder="Butuan City" />
              </div>
              <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                  <div className="relative">
                    <select className="block appearance-none w-full bg-grey-lighter border border-black text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey">
                      <option>Boarding House</option>
                      <option>Apartment</option>
                      <option>Room</option>
                    </select>
                  </div>
              </div>
              <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                <label htmlFor="this">Hello</label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-grey-lighter border border-black text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey">
                      <option value="Hello" disabled selected>Select an option</option>
                      <option>1 Bedroom</option>
                      <option>2 Bedroom</option>
                      <option>3 Bedroom</option>
                      <option>4 Bedroom</option>
                    </select>
                  </div>
              </div>
              <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                  <div className="relative">
                    <select className="block appearance-none w-full bg-grey-lighter border border-black text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey">
                      <option>Boarding House</option>
                      <option>Apartment</option>
                      <option>Room</option>
                    </select>
                  </div>
              </div>
              <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                  <div className="relative">
                    <select className="block appearance-none w-full bg-grey-lighter border border-black text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey">
                      <option>1 Bedroom</option>
                      <option>2 Bedroom</option>
                      <option>3 Bedroom</option>
                      <option>4 Bedroom</option>
                    </select>
                  </div>
              </div>
              <div className="w-full md:w-1/6 px-3 md:mb-0">
                <button className="font-bold text-black leading-tight bg-red hover:bg-red-light border border-red hover:border-red-light w-full text-white uppercase tracking-wide py-3 px-4 rounded">Search</button>
              </div>
      </div>
    </div>
  )
}

export default Searchbar