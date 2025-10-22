import React from 'react';

const Experts = () => {
    return (
        <div className="bg-white py-12 ">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Meet Our Veterinarians
      </h2>

      <div className="max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        
        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <img
            src="https://i.ibb.co/tPvCVPRk/vitaly-gariev-7-ONjx-Cll0-L8-unsplash.jpg"
            alt="Dr. Jon Katzman"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-blue-900">Dr. Jon Katzman</h3>
            <p className="text-gray-600 text-sm mb-2">Medical Director</p>
            <p className="text-gray-800 font-semibold mb-4">$85 / hour</p>
            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition">
              Contact
            </button>
          </div>
        </div>

       
        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <img
            src="https://i.ibb.co/DPcM9hGX/ashkan-forouzani-DPEPYPBZp-B8-unsplash.jpg"
            alt="Dr. Erin Simmonds"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-blue-900">Dr. Erin Simmonds</h3>
            <p className="text-gray-600 text-sm mb-2">Critical Care</p>
            <p className="text-gray-800 font-semibold mb-4">$90 / hour</p>
            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition">
              Contact
            </button>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <img
            src="https://i.ibb.co/SX3FPVHB/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg"
            alt="Dr. Scott Kilpatrick"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-blue-900">Dr. Scott Kilpatrick</h3>
            <p className="text-gray-600 text-sm mb-2">Internal Medicine</p>
            <p className="text-gray-800 font-semibold mb-4">$80 / hour</p>
            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition">
              Contact
            </button>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
          <img
            src="https://i.ibb.co/TMJTZP5B/fotos-QSNCO2o-Lt-HY-unsplash.jpg"
            alt="Dr. Debbie James"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-blue-900">Dr. Debbie James</h3>
            <p className="text-gray-600 text-sm mb-2">Neurology</p>
            <p className="text-gray-800 font-semibold mb-4">$95 / hour</p>
            <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition">
              Contact
            </button>
          </div>
        </div>

      </div>
    </div>
    );
};

export default Experts;







