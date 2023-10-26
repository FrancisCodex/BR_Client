import React from 'react'
import propertyimages from '..'

const Propertydetails = ({ property }) => {
  return (
    <div>
        <div className='propertyimage'>
            <div className="carousel">
                <img src={propertyimages} alt="" />
            </div>
        </div>

        <div className="propertydetails">
            <h1>Hello</h1>
        </div>

        <div className="contact">

        </div>
    </div>
  )
}

export default Propertydetails