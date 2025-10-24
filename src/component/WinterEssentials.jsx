import React from "react";
import { FaRegSnowflake } from "react-icons/fa6";


const WinterEssentials = () => {
  const products = [
    {
      id: 1,
      name: "Cozy Sweater",
      image: "https://i.ibb.co/mFRg44Sq/sweat.jpg",
      description: "Keep your pet warm and stylish this winter.",
      



    },
    {
      id: 2,
      name: "Heated Bed",
      image: "https://i.ibb.co/bR1Z98yh/Bed.jpg",
      description: "Soft and warm bed for cold nights.",
    },
    {
      id: 3,
      name: "Paw Protection Boots",
      image: "https://i.ibb.co/WpR7trBX/Paw.jpg",
      description: "Protect your pet’s paws from snow and ice.",
    },
    {
      id: 4,
      name: "Moisturizing Balm",
      image: "https://i.ibb.co/1GByXcQW/balm.webp",
      description: "Keep your pet’s skin soft and hydrated.",
    },
  ];

  return (
    
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
           Winter Pet Essentials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-[#e6f3f8] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default WinterEssentials;
