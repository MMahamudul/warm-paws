import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { image, serviceName, rating, price, id } = service;

  return (
    <div className="bg-[#e6f3f8] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-[300px] w-[300px]">
      <img
        src={image}
        alt={serviceName}
        className="w-full h-30 sm:h-22 md:h-30 object-cover"
      />

      <div className="p-4 sm:p-5 flex flex-col justify-between grow">
        <div>
          <p className="text-xs sm:text-xl  text-blue-950 mb-2">
            {serviceName}
          </p>
         {/*  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
            {description}
          </p> */}
        </div>

        <div className="mt-auto">
          <Link
            to={`/products/${id}`}
            className="inline-block bg-blue-900 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-950 transition"
          >
            View Details
          </Link>

          <div className="flex flex-row justify-between mt-3 text-sm sm:text-base  text-blue-950">
            <span>Rating: {rating}</span>
            <span>Price: {price}€</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
