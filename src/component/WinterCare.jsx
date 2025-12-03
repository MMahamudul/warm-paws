import React from 'react';
import MyContainer from './MyContainer';

const WinterCare = () => {
  return (
    <MyContainer>
      <div className="bg-white py-12 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-10">
          Winter Care Tips
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          
          <div className="bg-blue-50 flex flex-col sm:flex-row sm:space-x-4 items-center sm:items-start border border-blue-200 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              className="h-32 w-32 object-contain mb-3 sm:mb-0"
              src="https://i.ibb.co/fz0D5DsL/bath.png"
              alt="Warm Bath"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-bold uppercase text-blue-950">Warm Bath</h2>
              <p className="text-gray-700 text-sm">
                Use warm water to keep your dog relaxed and comfortable during baths.
                Avoid cold water especially in winter.
              </p>
            </div>
          </div>

          
          <div className="bg-blue-50 flex flex-col sm:flex-row sm:space-x-4 items-center sm:items-start border border-blue-200 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              className="h-32 w-32 object-contain mb-3 sm:mb-0"
              src="https://i.ibb.co/RkzvB0J6/drying.png"
              alt="Thorough Drying"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-bold uppercase text-blue-950">Thorough Drying</h2>
              <p className="text-gray-700 text-sm">
                Make sure to dry your dog thoroughly after a bath to prevent chills.
                Use a towel or pet-friendly dryer.
              </p>
            </div>
          </div>

          
          <div className="bg-blue-50 flex flex-col sm:flex-row sm:space-x-4 items-center sm:items-start border border-blue-200 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              className="h-32 w-32 object-contain mb-3 sm:mb-0"
              src="https://i.ibb.co/svGpbfBW/beding.png"
              alt="Cozy Bedding"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-bold uppercase text-blue-950">Cozy Bedding</h2>
              <p className="text-gray-700 text-sm">
                Provide your dog with warm bedding for comfort and joint support.
                A soft blanket works too.
              </p>
            </div>
          </div>

          
          <div className="bg-blue-50 flex flex-col sm:flex-row sm:space-x-4 items-center sm:items-start border border-blue-200 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              className="h-32 w-32 object-contain mb-3 sm:mb-0"
              src="https://i.ibb.co/S4TbWw3d/supplement.png"
              alt="Supplements"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-bold uppercase text-blue-950">Supplements</h2>
              <p className="text-gray-700 text-sm">
                Supplements like fish oil and joint support tablets can boost your
                dog’s health over time.
              </p>
            </div>
          </div>

          
          <div className="bg-blue-50 flex flex-col sm:flex-row sm:space-x-4 items-center sm:items-start border border-blue-200 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              className="h-32 w-32 object-contain mb-3 sm:mb-0"
              src="https://i.ibb.co/s9g3mZdm/diet.png"
              alt="Healthy Diet"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-bold uppercase text-blue-950">Healthy Diet</h2>
              <p className="text-gray-700 text-sm">
                A balanced diet ensures your dog gets the nutrients they need daily.
              </p>
            </div>
          </div>

          
          <div className="bg-blue-50 flex flex-col sm:flex-row sm:space-x-4 items-center sm:items-start border border-blue-200 p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <img
              className="h-32 w-32 object-contain mb-3 sm:mb-0"
              src="https://i.ibb.co/W455HPX5/exer.png"
              alt="Regular Exercise"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-bold uppercase text-blue-950">Regular Exercise</h2>
              <p className="text-gray-700 text-sm">
                Daily walks and exercise help maintain your dog’s physical and mental
                health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default WinterCare;
