import React, {useState} from 'react'
import Navbar from '../../navbar/navbar'
import Mapcontainer from '../../map/mapcontainer'
import { Checkbox } from "@material-tailwind/react";
import Footer from '../../footer';

const Uploadproperty = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  return (
    <div>
      <div className='h-fit pb-12'>
      <Navbar/>
      </div>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[1000px] w-[700px]">
          <div className='mb-5'>
              <h1 className="text-3xl font-semibold text-green-900">Upload Property</h1>
          </div>
            <form action="#">
              <div className="mb-5">
                <label htmlFor="title" className="mb-3 block text-base font-medium text-green-900">
                  Title
                </label>
                <input required type="text" name="title" id="title" placeholder="Enter Property Title" className="w-full rounded-md border border-green-400 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-5">
                <label htmlFor="address" className="mb-3 block text-base font-medium text-green-900">
                  Property Address
                </label>
                <input required type="text" name="address" id="address" placeholder="Enter your Property Address" className="w-full rounded-md border border-green-400 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-5">
                <label htmlFor="address" className="mb-3 block text-base font-medium text-green-900">
                  Address 2
                </label>
                <input type="text" name="address" id="address" placeholder="Enter your Property Address 2" className="w-full rounded-md border border-green-400 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-5">
                <label htmlFor="address" className="mb-3 block text-base font-medium text-green-900">
                  City
                </label>
                <input type="text" name="address" id="address" placeholder="Enter your City" className="w-full rounded-md border border-green-400 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>  
              <div className="mb-5">
                <label htmlFor="type" className="mb-3 block text-base font-medium text-green-900">
                  Property Type
                </label>
                <input type="text" name="type" id="type" placeholder="Property Type eg (Apartment, Boarding House, Room ...)" className="w-full rounded-md border border-green-400 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-5">
                <label htmlFor="description" className="mb-3 block text-base font-medium text-green-900">
                  Property Description
                </label>
                <textarea rows={4} name="description" id="description" placeholder="Input a short description of the Property for SEO searching eg (Key features, nearest malls, nearest stores)" className="w-full resize-none rounded-md border border-green-400 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" defaultValue={""} />
              </div>

              <div className="mb-5">
                <h1 className='mb-3 block text-2xl font-bold text-green-900'>
                  Property Location and Images
                </h1>
                  <div className="mb-5">
                    <Mapcontainer/>
                  </div>
                <div className="mb-5">
                  <label htmlFor="latitude" className="mb-3 block text-base font-medium text-green-900">
                    Longitude
                  </label>
                  <input type="text" name="latitude" id="latitude" placeholder="Enter Properties Longitude" className="w-full rounded-md border border-green-400 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div className="mb-5">
                  <label htmlFor="longitude" className="mb-3 block text-base font-medium text-green-900">
                    Latitude
                  </label>
                  <input type="text" name="longitude" id="longitude" placeholder="Enter Properties Latitude" className="w-full rounded-md border border-green-400 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>

              {/* Image Upload */}

              <div className="mb-6 pt-4">
                <label className="mb-5 block text-xl font-semibold text-green-900">
                  Upload File
                </label>

                <div className="mb-8">
                  <input type="file" name="file" id="file" className="sr-only" onChange={handleFileChange} />
                  <label
                    htmlFor="file"
                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                  >
                    <div>
                      <span className="mb-2 block text-xl font-semibold text-green-900">
                        Drop files here
                      </span>
                      <span className="mb-2 block text-base font-medium text-green-900">
                        Or
                      </span>
                      <span
                        className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-green-900"
                      >
                        Browse
                      </span>
                    </div>
                  </label>
                </div>
                {/* Show when there is a file being uploaded */}
                {selectedFile && (
                  <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                    <div className="flex items-center justify-between">
                      <span className="truncate pr-3 text-base font-medium text-green-900">
                        {selectedFile.name}
                      </span>
                      <button className="text-green-900" onClick={() => setSelectedFile(null)}>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                          fill="currentColor"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                          fill="currentColor"
                        />
                      </svg>
                      </button>
                    </div>
                  </div>
                )}
                {/* End of the file shown */}
              </div>
              {/* End of the Image Upload Section */}

              {/* Amenities Section */}
              <div className="mb-5">
                <h1 className='mb-3 block text-2xl font-bold text-green-900'>
                  Amenities
                </h1>
                <div className="mb-5 grid grid-cols-4 gap-2">
                  <Checkbox label="Wifi"/>
                  <Checkbox label="Parking Space"/>
                  <Checkbox label="Security"/>
                  <Checkbox label="Air Conditioned"/>
                  <Checkbox label="Washer"/>
                  <Checkbox label="Dryer"/>
                  <Checkbox label="Furnished"/>
                  <Checkbox label="Equipped Kitchen"/>
                  <Checkbox label="Elevator"/>
                  <Checkbox label="Near Public Transportation"/>
                </div>
              </div>
              {/* End of Amenities Section */}


              {/* Property Details */}

              <div className="mb-5">
                <h1 className='mb-3 block text-2xl font-bold text-green-900'>
                  Property Details
                </h1>

                <div className="mb-5">
                  <label htmlFor="num_rooms" className="mb-3 block text-base font-medium text-green-900">
                    Number of Rooms
                  </label>
                  <input required type="number" max={10} name="num_rooms" id="num_rooms" placeholder="Number of Rooms" className="w-full rounded-md border border-green-400 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div className="mb-5">
                  <label htmlFor="num_bathrooms" className="mb-3 block text-base font-medium text-green-900">
                    Number of Bathrooms
                  </label>
                  <input required type="number" max={10} name="num_bathrooms" id="num_bathrooms" placeholder="Number of Bathrooms" className="w-full rounded-md border border-green-400 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                <div className="mb-5">
                  <label htmlFor="num_beds" className="mb-3 block text-base font-medium text-green-900">
                    Number of Bed
                  </label>
                  <input required type="number" max={10} name="num_beds" id="num_beds" placeholder="Number of Beds" className="w-full rounded-md border border-green-400 bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
              </div>
              <div>
                <button className="hover:shadow-form rounded-md bg-green-700 py-3 px-8 text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        
        <div>
          <Footer/>
        </div>

    </div>
  )
}

export default Uploadproperty