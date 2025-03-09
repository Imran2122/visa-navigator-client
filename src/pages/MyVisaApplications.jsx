import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../authprovider/AuthProvider";
import Swal from "sweetalert2";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/my-applications/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched applications:", data);
          setApplications(data);
        })
        .catch((error) => {
          console.error("Error fetching applications:", error);
        });
    }
  }, [user?.email]);

  const handleCancelApplication = (id) => {
    console.log("delete", id);
    fetch(`http://localhost:5000/my-applications/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
      
        if (data.deletedCount) {
          Swal.fire("delete successfully");
        }
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">My Visa Applications</h2>
      {applications.length === 0 ? (
        <p className="text-lg text-gray-500">No applications found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div
              key={app._id}
              className="border rounded-lg p-4 shadow-md bg-white"
            >
              <img
                src={app.countryImage}
                alt={app.country}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-3">{app.country}</h3>
              <p>
                <strong>Visa Type:</strong> {app.visaType}
              </p>
              <p>
                <strong>Processing Time:</strong> {app.processingTime}
              </p>
              <p>
                <strong>Fee:</strong> ${app.fee}
              </p>
              <p>
                <strong>Validity:</strong> {app.validity}
              </p>
              <p>
                <strong>Application Method:</strong> {app.applicationMethod}
              </p>
              <p>
                <strong>Applied Date:</strong>{" "}
                {new Date(app.appliedDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Applicant Name:</strong> {app.firstName} {app.lastName}
              </p>
              <p>
                <strong>Applicant Email:</strong> {app.email}
              </p>
              <button
                onClick={() => handleCancelApplication(app._id)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyVisaApplications;
