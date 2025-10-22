import React from 'react';
import { FaStar } from 'react-icons/fa';

const ServiceCard = ({service}) => {
    /* const {image,description,serviceName, price, providerName, rating  } = service; */
    const {image,description, serviceName, rating, price } = service;
    return (
        <div >
            <div class="max-w-sm bg-[#b3d9e6] shadow-md overflow-hidden h-[450px]">
  
  <img
    src={image}
    alt="Dog walking"
    class="w-full h-56 object-cover"
  />

  
  <div class="p-6">
    <h2 class="text-xl font-semibold text-gray-800 mb-2">{serviceName}</h2>
    <p class="text-gray-700 leading-relaxed text-sm mb-5">
      {description}
    </p>

    <button class="bg-blue-900 text-white px-5 py-2 text-sm font-medium hover:bg-blue-950 rounded-full">
      View Details
    </button>

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


    