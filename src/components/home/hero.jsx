import React from 'react'
import '../../styles/hero.css'

export default function Hero() {
  return (
    <div>
        <div className="flex items-center justify-center align-center bg-cover bg-bottom p-10 md:py-40 md:px-16" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1519380400109-9ef80d934359?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
          <form className="bg-smoke-dark p-6 mt-10 md:p-10 rounded w-30 shadow-lg justify-centered align-center">
            <h1 className="font-serif text-2xl md:text-3xl leading-tight text-center font-normal text-white mb-8">Find your perfect accommodation <br /> during the school year</h1>
            <div className="flex flex-wrap items-end -mx-3">
              <div className="w-full px-3 mb-6">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">Houses</label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-password" type="search" placeholder="two bed room apartment, four person apartment, near school" />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-city">City</label>
                <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-city" type="text" placeholder="Santorini" />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-state">
                  Type
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey" id="grid-state">
                    <option>Boarding House</option>
                    <option>Apartment</option>
                    <option>Room</option>
                  </select>
                  <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 md:mb-0">
                <button className="font-bold leading-tight bg-red hover:bg-red-light border border-red hover:border-red-light w-full text-white uppercase tracking-wide py-3 px-4 rounded">Search</button>
              </div>
            </div>
          </form>
        </div>

    </div>
  )
}
