import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ServiceCard = ({service}) => {
    /* const {
      } = service; */
    const {image,description, serviceName, rating, price, id } = service;
    return (
        <div >
            <div className="max-w-sm bg-[#b3d9e6] shadow-md overflow-hidden h-[450px]">
  
  <img
    src={image}
    alt="Dog walking"
    className="w-full h-56 object-cover"
  />

  
  <div className="p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{serviceName}</h2>
    <p className="text-gray-700 leading-relaxed text-sm mb-5">
      {description}
    </p>

    <Link to= {`/products/${id}`} className="btn bg-blue-900 text-white px-5 py-2 text-sm font-medium hover:bg-blue-950 rounded-full">
      View Details
    </Link>

    <div className='flex justify-between mt-4'>
        <h6 className='text-blue-950 font-bold'>Rating: {rating}</h6>
        <h6 className='text-blue-950 font-bold'>Price: {price}€</h6>
    </div>

    

    
  </div>
</div>

        </div>
    );
};

export default ServiceCard;


    