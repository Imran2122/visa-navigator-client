import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const AllVisas = () => {
  const visas = useLoaderData();
  console.log(visas)

  return (
    <div className="max-w-7xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">All Visas ({visas.length})</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visas.map((visa) => (
          <div key={visa._id} className="bg-white shadow-lg rounded-lg p-4">
            <img src={visa.countryImage} alt={visa.country} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">{visa.country} - {visa.visaType}</h3>
            <p className="text-gray-600"><strong>Processing Time:</strong> {visa.processingTime}</p>
            <p className="text-gray-600"><strong>Fee:</strong> ${visa.fee}</p>
            <p className="text-gray-600"><strong>Validity:</strong> {visa.validity}</p>

            <Link to={`/visa/${visa._id}`}>
              <button className="btn btn-primary w-full mt-4">See Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
