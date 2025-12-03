import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../component/ServiceCard";

const Services = () => {
  const data = useLoaderData() || [];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none"); // "none" | "asc" | "desc"

  const filteredServices = [...data]
    .filter((service) =>
      service.serviceName
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase().trim())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      }
      if (sortOrder === "desc") {
        return b.price - a.price;
      }
      return 0; // no sorting
    });

  return (
    <div className="px-4 py-8">
      {/* Heading + Search + Sort */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <p className="text-2xl sm:text-3xl font-bold text-blue-900 text-center sm:text-left">
          Popular Winter Care Services
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by service name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-56 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Sort Dropdown */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full sm:w-44 border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="none">Sort by price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}

        {filteredServices.length === 0 && (
          <p className="col-span-full text-center text-gray-600 mt-8">
            No services found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Services;
