import React from "react";
import Slider from "react-slick";
import Card from "../cards/card";

const Featuredlist = ({ property }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
  
    return (
      <Slider {...settings}>
        {property.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </Slider>
    );
  };
  
  export default Featuredlist;
  
