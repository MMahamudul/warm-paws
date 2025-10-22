import React from 'react';

const Items = ({service}) => {
    const {image, description, serviceName, price, providerName} = service;
    return (
        
                


    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700">{serviceName}</h1>
          
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          <img
            src={image}
            alt="Dog Grooming"
            className="rounded-lg shadow-lg w-full h-96 object-cover"
          />

          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">What’s Included</h2>
            <p className="text-gray-600 mb-4">
              {description}
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-gray-700">
              <li>Service Provider: {providerName}</li>
              
            </ul>

            <p className="mt-6 text-lg font-bold text-blue-700">${price} / session</p>
          </div>
        </div>

        {/* Booking Form */}
        <form className="mt-16 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Book This Service</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              type="tel"
              placeholder="Service"
              className="border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
            />
            

            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
 




           
    );
};

export default Items;