import React from 'react'
import schoolimg from '../../assets/school_img.jpeg'

const Popupschool = () => {
  return (
    <div>
        <div class="max-w-lg mx-auto">
    <div class="bg-white rounded-lg max-w-sm">
        <a href="#">
            <img class="rounded-t-lg" src={schoolimg} alt="Caraga State University"/>
        </a>
            <div>
                <a href="#">
                    <h5 class="text-gray-900 font-bold text-sm tracking-tight">Caraga State University</h5>
                </a>
                <p class="font-normal text-gray-700 mb-3">Caraga State University endeavors to produce globally-competitive and socially responsible human capital towards the substainable and inclusive development of Caraga Region and beyond.</p>
                <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                    Read more
                </a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Popupschool