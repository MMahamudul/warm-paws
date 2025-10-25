import React from 'react';
import { IoMdStarOutline } from 'react-icons/io';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
import { Link } from 'react-router';


const ServiceCard = ({ service }) => {
  const { image, description, serviceName, rating, price, id } = service;

  return (
    <div className="bg-[#e6f3f8] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      
      
      <img
        src={image}
        alt={serviceName}
        className="w-full h-48 sm:h-52 md:h-56 object-cover"
      />

      
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-blue-950 mb-2 line-clamp-1">
            {serviceName}
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        
        <div className="mt-auto">
          <Link
            to={`/products/${id}`}
            className="inline-block bg-blue-900 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-950 transition"
          >
            View Details
          </Link>

          <div className="flex flex-row justify-between mt-3 text-sm sm:text-base font-semibold text-blue-950">
            <span>Rating: {rating}</span>
            <span>Price: {price}€</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
