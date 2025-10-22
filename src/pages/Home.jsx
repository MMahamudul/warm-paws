import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../component/ServiceCard';
import bannerImg from '../assets/bannerImg.webp'; 
import MyContainer from '../component/MyContainer';
import WinterCare from '../component/WinterCare';
import Experts from '../component/Experts';


const Home = () => {
    const data = useLoaderData();
    
    return (
       <MyContainer>
        <h1 className="text-3xl font-bold my-5 ml-95 text-blue-900">Popular Winter Care Services</h1>
<div className="grid grid-cols-4 gap-3 items-start mt-10">
    
  
  <div className="col-span-3 grid grid-cols-3 gap-6">
    {data.map(service => (
      <ServiceCard
        key={service.id}
        service={service}
      />
    ))}
  </div>

 
  <div className="col-span-1 flex justify-center items-center">
    <img
      src={bannerImg}
      alt="Winter pets"
      className="mt-60 w-full h-auto object-cover"
    />
  </div>
</div>
<WinterCare></WinterCare>
<Experts></Experts>
       </MyContainer>
       
   


        
    );
};

export default Home;

