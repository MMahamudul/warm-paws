import React from 'react';
import toast from "react-hot-toast";
import { Link } from 'react-router';

const Items = ({ service }) => {
  const { image, description, serviceName, price, providerName } = service;

  const handleBooking = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Awesome! Your Booking was Successful 🎉");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        
        
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950">
            {serviceName}
          </h1>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
         
          <img
            src={image}
            alt={serviceName}
            className="rounded-lg shadow-lg w-full h-64 sm:h-80 lg:h-96 object-cover"
          />

          
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">
              What’s Included
            </h2>
            <p className="text-blue-600 text-base sm:text-lg font-semibold leading-relaxed">
              {description}
            </p>

            <div className="mt-2">
              <h2 className="text-black text-base sm:text-lg font-semibold">
                Service Provider:{" "}
                <span className="text-blue-700">{providerName}</span>
              </h2>
            </div>

            <p className="mt-4 text-black text-base sm:text-lg font-semibold">
              Rate:{" "}
              <span className="text-blue-800">€{price}/session</span>
            </p>

            
            <Link
              to="/"
              className="btn bg-blue-900 text-white text-base sm:text-lg font-semibold py-3 sm:py-4 w-full sm:w-1/2 lg:w-1/3 mt-4 rounded-sm hover:bg-blue-950 transition"
            >
              Return To Home
            </Link>
          </div>
        </div>

        
        <form
          onSubmit={handleBooking}
          className="bg-blue-100 mt-10 p-6 sm:p-8 border border-blue-200 shadow-md rounded-md"
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center sm:text-left">
            Book This Service
          </h2>

          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-blue-800 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-blue-800 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-blue-800 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              required
            />
            <input
              type="text"
              placeholder="Service"
              className="border border-blue-800 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              required
            />

           
            <button
              type="submit"
              className="bg-blue-900 text-white py-3 text-base sm:text-lg font-semibold rounded-sm hover:bg-blue-950 transition w-full sm:w-1/2 lg:w-1/4 mx-auto mt-4"
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
