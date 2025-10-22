import React from 'react';
import MyContainer from './MyContainer';

const WinterCare = () => {
    return (
      <MyContainer>
         <div className="bg-white py-12">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Winter Care Tips 
      </h2>
      <div className="w-full grid grid-cols-3 gap-5 justify-around">

       
        <div className=" bg-blue-50 flex space-x-4 items-center border-blue-200 p-2 rounded-lg shadow-lg">
          <div ><img className="h-40 w-40" src="https://i.ibb.co/fz0D5DsL/bath.png" alt="" /></div>
          <div>
            <h2 className="text-lg font-bold uppercase">Warm Bath</h2>
            <p className="text-gray-600 text-sm">Use warm water to keep your dog relaxed and comfortable during baths. 
                Avoid cold water especially in winter.</p>
          </div>
        </div>

        
        <div className="bg-blue-50 flex space-x-4 items-center border-blue-200 p-2 rounded-lg shadow-lg">
          <div ><img  className="h-30 w-50" src="https://i.ibb.co/RkzvB0J6/drying.png" alt="" /></div>
          <div>
            <h2 className="text-lg font-bold uppercase">Thorough Drying</h2>
            <p className="text-gray-600 text-sm">Make sure to dry your dog thoroughly after a bath to prevent chills. Use a towel or pet-friendly dryer.</p>
          </div>
        </div>

       
        <div className="bg-blue-50 flex space-x-4 items-center border-blue-200 p-2 rounded-lg shadow-lg">
          <div ><img className="h-40 w-40" src="https://i.ibb.co/svGpbfBW/beding.png" alt="" /></div>
          <div>
            <h2 className="text-lg font-bold uppercase">Cozy Bedding</h2>
            <p className="text-gray-600 text-sm">Provide your dog with warm bedding for comfort and joint support. A soft blanket works too.</p>
          </div>
        </div>

        
        <div className="bg-blue-50 flex space-x-4 items-center border-blue-200 p-2 rounded-lg shadow-lg">
          <div >

            <img className="h-40 w-40" src="https://i.ibb.co/S4TbWw3d/supplement.png" alt="" />
          </div>
          <div>
            <h2 className="text-lg font-bold uppercase">Supplements</h2>
            <p className="text-gray-600 text-sm">Supplements like fish oil and joint support tablets can boost your dog’s health over time.</p>
          </div>
        </div>
        
        <div className="bg-blue-50 flex space-x-4 items-center border-blue-200 p-2 rounded-lg shadow-lg">
          <div >

            <img className="h-40 w-40" src="https://i.ibb.co/s9g3mZdm/diet.png" alt="" />
          </div>
          <div>
            <h2 className="text-lg font-bold uppercase">Healthy Diet</h2>
            <p className="text-gray-600 text-sm">A balanced diet ensures your dog gets the nutrients they need daily.</p>
          </div>
        </div>
        <div className="bg-blue-50 flex space-x-4 items-center border-blue-200 p-2 rounded-lg shadow-lg">
          <div >

            <img className="h-40 w-40" src="https://i.ibb.co/W455HPX5/exer.png" alt="" />
          </div>
          <div>
            <h2 className="text-lg font-bold uppercase">Regular Exercise</h2>
            <p className="text-gray-600 text-sm">Daily walks and exercise help maintain your dog’s physical and mental health.</p>
          </div>
        </div>
        
        
      


      </div>
    </div>
      </MyContainer>
    );
};

export default WinterCare;