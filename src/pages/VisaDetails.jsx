
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import Swal from "sweetalert2";

const VisaDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [visa, setVisa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: user?.email || "",
    firstName: "",
    lastName: "",
    appliedDate: new Date().toISOString().split("T")[0], // Current date
    fee: "",
  });

  // Fetch visa details
  useEffect(() => {
    const fetchVisaDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/visa/${id}`);
        if (!response.ok) {
          throw new Error("Visa not found");
        }
        const data = await response.json();
        setVisa(data);
        setFormData((prev) => ({ ...prev, fee: data.fee || "" }));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVisaDetails();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




const handleAddVisa=()=>{
    fetch('http://localhost:5000/add-visa',{
        method:"post",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({...formData,visaId: id})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            Swal.fire('successfully apply')
        }
    })
}
  const handleApply = async (e) => {
    e.preventDefault();
    await handleAddVisa(); 
  };

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">Visa Details</h1>
      {visa ? (
        <div>
          <h2 className="text-xl font-semibold">{visa.title}</h2>
          <p className="text-gray-700">{visa.description}</p>
          <p className="mt-2 text-gray-600">Country: {visa.countryName}</p>
          <p className="mt-2 text-gray-600">
            Processing Time: {visa.processingTime} days
          </p>
          <p className="mt-2 text-gray-600">Fee: ${visa.fee}</p>

          {/* Apply Button */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Apply for Visa
          </button>
        </div>
      ) : (
        <p className="text-red-500">Visa not found.</p>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Apply for Visa</h2>
            <form onSubmit={handleApply}>
              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                className="w-full p-2 border rounded mb-2 bg-gray-100"
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                name="appliedDate"
                value={formData.appliedDate}
                readOnly
                className="w-full p-2 border rounded mb-2 bg-gray-100"
              />
              <input
                type="text"
                name="fee"
                value={formData.fee}
                readOnly
                className="w-full p-2 border rounded mb-2 bg-gray-100"
              />
              <button
                type="submit"
                className="w-full p-2 bg-green-500 text-white rounded"
              >
                Apply
              </button>
            </form>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;

