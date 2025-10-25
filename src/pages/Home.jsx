import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from '../component/ServiceCard';
import bannerImg from '../assets/bannerImg.webp'; 
import MyContainer from '../component/MyContainer';
import WinterCare from '../component/WinterCare';
import Experts from '../component/Experts';
import HeroSlider from '../component/HeroSlider';
import WinterEssentials from '../component/WinterEssentials';

const Home = () => {
  const data = useLoaderData();

  return (
    <MyContainer>
      
      <HeroSlider />

      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center sm:text-left my-8 px-4">
        Popular Winter Care Services
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start mt-8 px-4">
       
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

       
        <div className="lg:col-span-1 flex justify-center lg:justify-end items-center mt-6 lg:mt-0">
          <img
            src={bannerImg}
            alt="Winter pets"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full rounded-lg object-cover"
          />
        </div>
      </div>

      
      <div className="mt-12 space-y-16">
        <WinterCare />
        <Experts />
        <WinterEssentials />
      </div>
    </MyContainer>
  );
};

export default Home;
