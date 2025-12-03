import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { image, serviceName, rating, price, id } = service;

  return (
    <div className="bg-[#e6f3f8] shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
      <img
        src={image}
        alt={serviceName}
        className="w-full h-40 sm:h-44 md:h-48 object-cover"
      />

      <div className="p-4 sm:p-5 flex flex-col justify-between grow">
        <div>
          <p className="text-sm sm:text-lg font-semibold text-blue-950 mb-2 line-clamp-1">
            {serviceName}
          </p>
        </div>

        <div className="mt-auto">
          <Link
            to={`/products/${id}`}
            className="inline-block bg-blue-900 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-950 transition"
          >
            View Details
          </Link>

          <div className="flex flex-row justify-between items-center mt-3 text-sm sm:text-base text-blue-950">
            <span className="flex items-center gap-1">
              <IoMdStarOutline />
              <span>{rating}</span>
            </span>
            <span className="flex items-center gap-1">
              <RiMoneyEuroCircleLine />
              <span>{price}€</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
