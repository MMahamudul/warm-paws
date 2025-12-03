import React from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../component/ServiceCard";

const Services = () => {
  const data = useLoaderData();

  return (
    <div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
