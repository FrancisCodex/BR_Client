import React from 'react'

export default function Featuredcard() {
  return (
    <div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative mx-auto w-full">
            <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
            <div className="rounded-lg bg-white p-4 shadow">
                <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                    <img src="https://assets.entrepreneur.com/content/3x2/2000/20150622231001-for-sale-real-estate-home-house.jpeg?crop=16:9" alt="" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-5 mb-3 flex">
                    <p className="flex items-center font-medium text-white shadow-sm">
                    <i className="fa fa-camera mr-2 text-xl text-white" />
                    10
                    </p>
                </div>
                <div className="absolute bottom-0 right-5 mb-3 flex">
                    <p className="flex items-center font-medium text-gray-800">
                    <i className="fa fa-heart mr-2 text-2xl text-white" />
                    </p>
                </div>
                <span className="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-[#1f93ff] px-2 py-1 text-xs font-semibold text-white"> Residential </span>
                <span className="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i className="fa fa-star" /> </span>
                </div>
                <div className="mt-4">
                <h2 className="line-clamp-1 text-2xl font-medium text-gray-800 md:text-lg" title="New York">1000 yards (Brand New) Bungalow Available in...</h2>
                <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-sm uppercase"> PKR </span>
                    <span className="text-2xl">3,200,000,000</span>/Sqft
                </p>
                </div>
                <div className="mt-4">
                <p className="line-clamp-1 mt-2 text-lg text-gray-800">6 bedrooms Architect designed Imported fixtures and fittings Full basement Top of the [more]</p>
                </div>
                <div className="justify-center">
                <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                    <p className="flex items-center font-medium text-gray-800">
                    <i className="fa fa-bed mr-2 text-blue-900" />
                    2
                    </p>
                    <p className="flex items-center font-medium text-gray-800">
                    <i className="fa fa-bath mr-2 text-blue-900" />
                    3
                    </p>
                    <p className="flex items-center font-medium text-gray-800">
                    <i className="fa fa-home mr-2 text-blue-900" />
                    2000 Yd<sup>2</sup>
                    </p>
                </div>
                </div>
                <div className="mt-8 grid grid-cols-2">
                <div className="flex items-center">
                    <div className="relative">
                    <div className="h-6 w-6 rounded-full bg-gray-200 md:h-8 md:w-8" />
                    <span className="bg-primary-red absolute top-0 right-0 inline-block h-3 w-3 rounded-full" />
                    </div>
                    <p className="line-clamp-1 ml-2 text-gray-800">Salman Ghouri Dev</p>
                </div>
                <div className="flex justify-end">
                    <button><i className="fa fa-sms mx-1 rounded-md bg-[#0174E1] py-1 px-3 text-2xl text-white" /></button>
                    <button><i className="fa fa-phone rounded-md bg-[#0174E1] py-1 px-3 text-2xl text-white" /></button>
                </div>
                </div>
            </div>
            </a>
            </div>
        </div>


    </div>
  )
}
