import React from 'react';
import toast from "react-hot-toast";
import { Link } from 'react-router';

const Items = ({service}) => {
    const {image, description, serviceName, price, providerName} = service;
    

const handleBooking = (e) => {
  e.preventDefault();
  e.target.reset(); 
  toast.success("Awesome !! Your Booking was Successful");
};
    return (
        
                


    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
       
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-blue-950">{serviceName}</h1>
          
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          <img
            src={image}
            alt="Dog Grooming"
            className="rounded-lg shadow-lg w-full h-96 object-cover"
          />

          
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-3">What’s Included</h2>
            <p className="text-blue-600 mb-4 text-lg font-semibold">
              {description}
            </p>

            
            <div className="flex gap-2 mt-4">
              <h2 className='text-black text-lg font-semibold'>Service Provider:
                <span className=" text-lg text-blue-700">  {providerName}</span> </h2>
              
            </div>

            <p className="mt-6   text-black text-lg font-semibold">Rate: 
              <span className=" text-blue-800 text-lg">  €{price}/session</span>
              </p>
          </div>
          <Link to="/" className='btn w-3/12 md:col-span-2 bg-blue-900 text-white text-lg  font-semibold py-6 rounded-sm'>Return To Home</Link>
        </div>

        
        <form onSubmit={handleBooking} className="bg-blue-100 mt-6  p-8 border-2 border-blue-100 shadow-lg rounded-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Book This Service</h2>

          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-blue-800 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-blue-800  rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-blue-800  rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <input
              type="tel"
              placeholder="Service"
              className="border border-blue-800  rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            

            <button
              type="submit"
              className="w-2/12 mx-auto md:col-span-2 bg-blue-900 text-white py-3 text-lg  font-semibold rounded-sm hover:bg-blue-950 transition"
              
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