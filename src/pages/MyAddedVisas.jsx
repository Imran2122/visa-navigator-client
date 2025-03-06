

import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedVisas = () => {
  const initialVisas = useLoaderData();
  const [visas, setVisas] = useState(initialVisas);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this visa?"
    );
    if (!confirmDelete) return;

    fetch(`http://localhost:5000/add-visa/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
          Swal.fire("Visa deleted successfully");
          setVisas(visas.filter((visa) => visa._id !== id));
        }
      });
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Added Visas</h2>

      {visas.length === 0 ? (
        <p className="text-center text-gray-500">No visas added yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visas.map((visa) => (
            <div
              key={visa._id}
              className="card bg-white shadow-lg rounded-lg p-4"
            >
              <img
                src={visa.countryImage}
                alt={visa.countryImage}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-2">{visa.country}</h3>
              <p className="text-gray-700">
                <strong>Visa Type:</strong> {visa.visaType}
              </p>
              <p className="text-gray-700">
                <strong>Processing Time:</strong> {visa.processing_time} days
              </p>
              <p className="text-gray-700">
                <strong>Fee:</strong> ${visa.fee}
              </p>
              <p className="text-gray-700">
                <strong>Validity:</strong> {visa.validity} months
              </p>
              <p className="text-gray-700">
                <strong>Application Method:</strong> {visa.applicationMethod}
              </p>

              <button
                onClick={() => handleDelete(visa._id)}
                className="btn btn-error mt-4 w-full"
              >
                Delete
              </button>
              <Link to={`/updateVisa/${visa._id}`}>
                <button className="btn btn-error mt-4 w-full">Update</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;
