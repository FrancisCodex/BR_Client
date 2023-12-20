import React from 'react'
import instance from '../../../../hooks/useRefreshToken';
import { toast } from 'react-toastify';

const Propertlist = ({property}) => {
    const imageUrl = `http://localhost:8080/api/property/img/${property.property_id}/${property.image_name}`;

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this property?')) {
            try {
                await instance.delete(`/api/property/delete/${property.property_id}`);
                toast.success('Property deleted successfully');
            } catch (error) {
                console.error(error);
                toast.error('Failed to delete property');
            }
        }
    };

  return (
    <div>
        <div class="flex flex-col py-3">
        <div
            class="relative flex flex-col mx-auto md:mx-0 md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-full border border-white bg-white">
            <div class="w-full md:w-1/3 bg-white grid place-items-center">
                <img src={imageUrl} alt="tailwind logo" class="rounded-xl" />
            </div>
                <div class="w-full md:w-3/3 bg-white flex flex-col space-y-2 p-3">
                    <div class="flex justify-between item-center">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <p class="text-gray-600 font-bold text-sm ml-1">
                                {property.rating}
                                <span class="text-gray-500 font-normal">{property.rating}</span>
                            </p>
                        </div>
                        <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                            Superhost</div>
                    </div>
                    <h3 class="font-black text-gray-800 md:text-3xl text-xl">{property.listing_title}</h3>
                    <p class="md:text-lg text-gray-500 text-base line-clamp-2 text-wrap">{property.property_description}</p>
                    <p class="text-xl font-black text-gray-800">
                        $110
                        <span class="font-normal text-gray-600 text-base">/M</span>
                    </p>
                    <div class="flex justify-between items-center mt-4">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Edit
                        </button>
                        <button onClick={handleDelete} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Propertlist