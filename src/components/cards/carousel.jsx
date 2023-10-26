import React from "react";
import Swiper from "swiper";
import Card from "./card";

const Carousel = ({ properties }) => {
  const swiper = new Swiper(".carousel", {
    slidesPerView: 3,
    spaceBetween: 10,
  });

  return (
    <div className="grid grid-cols-3 gap-2 carousel">
    {properties.map((property) => (
      <div className="card" key={property.id}>
        <Card property={property} />
      </div>
    ))}
  </div>
  );
};

export default Carousel;
