import React from 'react';
import { useLoaderData } from 'react-router';
import MyContainer from '../component/MyContainer';
import ServiceCard from '../component/ServiceCard';

const Services = () => {
    const data = useLoaderData();
    return (
        <MyContainer>
        <h1 className="text-3xl font-bold my-5 text-center text-blue-900">Popular Winter Care Services</h1>
    <div className="grid grid-cols-3 gap-3 items-start mt-10">
    
  
  <div className="col-span-3 grid grid-cols-3 gap-6">
    {data.map(service => (
      <ServiceCard
        key={service.id}
        service={service}
      />
    ))}
  </div>

 
  
</div>

       </MyContainer>
    );
};

export default Services;