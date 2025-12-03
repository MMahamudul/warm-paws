import React from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../component/ServiceCard";
import MyContainer from "../component/MyContainer";
import WinterCare from "../component/WinterCare";
import Experts from "../component/Experts";
import HeroSlider from "../component/HeroSlider";
import WinterEssentials from "../component/WinterEssentials";

const Home = () => {
  const data = useLoaderData() || []; // prevents crash if data is undefined

  return (
    <MyContainer>
      <HeroSlider />

      <div className="">
        <p className="text-2xl sm:text-3xl font-bold text-blue-900 text-center my-8 px-4">
  Popular Winter Care Services
</p>

      </div>
      {/* Single grid: 1–4 columns responsive */}
      <div className="px-4 mt-8">
        <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {data.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
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
