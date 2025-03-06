import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLatestVisas = async () => {
      try {
        const response = await fetch("http://localhost:5000/add-visa");
        if (!response.ok) {
          throw new Error("Failed to fetch latest visas");
        }
        const data = await response.json();
      
        setVisas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVisas();
  }, []);

  if (loading) return <p className="text-center text-blue-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Latest Visas</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {visas.map((visa) => (
            <div key={visa._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={visa.countryImage} alt={visa.country} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{visa.country}</h3>
                <p className="text-gray-600">Visa Type: {visa.visaType}</p>
                <p className="text-gray-600">Processing Time: {visa.processingTime} days</p>
                <p className="text-gray-600">Fee: ${visa.fee}</p>
                <p className="text-gray-600">Validity: {visa.validity} months</p>
                <p className="text-gray-600">Application Method: {visa.applicationMethod}</p>

                <Link to={`/visa/${visa._id}`} className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link to="/all-visas" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            See All Visas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestVisas;
