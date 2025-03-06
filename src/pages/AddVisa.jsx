import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import Swal from "sweetalert2";

const AddVisa = () => {
  const { user } = useContext(AuthContext); 


  const handleAddVisa = async (e) => {
    e.preventDefault();
    
    const visaData = {
      countryImage: e.target.countryImage.value,
      countryName: e.target.countryName.value,
      visaType: e.target.visaType.value,
      processingTime: e.target.processingTime.value,
      requiredDocuments: [
        ...(e.target.passport.checked ? ["Valid passport"] : []),
        ...(e.target.applicationForm.checked ? ["Visa application form"] : []),
        ...(e.target.photo.checked ? ["Recent passport-sized photograph"] : []),
      ],
      description: e.target.description.value,
      ageRestriction: e.target.ageRestriction.value,
      fee: e.target.fee.value,
      validity: e.target.validity.value,
      applicationMethod: e.target.applicationMethod.value,
      addedBy: user?.email,
    };

    fetch('http://localhost:5000/add-visa',{
      method:"post",
      headers:{
         "Content-Type": "application/json"
      },
      body:JSON.stringify(visaData)
    })
    .then(res=>res.json())
    .then(data=>{
      
      if(data.insertedId){
        Swal.fire('data successfully add ')
      }
    })

   
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Add a New Visa</h2>
      <form onSubmit={handleAddVisa} className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Country Image URL</label>
          <input type="text" name="countryImage" className="w-full border p-2 rounded-md" required />
        </div>
        <div>
          <label className="block">Country Name</label>
          <input type="text" name="countryName" className="w-full border p-2 rounded-md" required />
        </div>
        <div>
          <label className="block">Visa Type</label>
          <select name="visaType" className="w-full border p-2 rounded-md" required>
            <option value="Tourist visa">Tourist Visa</option>
            <option value="Student visa">Student Visa</option>
            <option value="Official visa">Official Visa</option>
          </select>
        </div>
        <div>
          <label className="block">Processing Time</label>
          <input type="text" name="processingTime" className="w-full border p-2 rounded-md" required />
        </div>
        <div className="col-span-2">
          <label className="block">Required Documents</label>
          <div className="flex gap-4">
            <label><input type="checkbox" name="passport" /> Valid Passport</label>
            <label><input type="checkbox" name="applicationForm" /> Visa Application Form</label>
            <label><input type="checkbox" name="photo" /> Passport-sized Photo</label>
          </div>
        </div>
        <div className="col-span-2">
          <label className="block">Description</label>
          <textarea name="description" className="w-full border p-2 rounded-md" required />
        </div>
        <div>
          <label className="block">Age Restriction</label>
          <input type="number" name="ageRestriction" className="w-full border p-2 rounded-md" required />
        </div>
        <div>
          <label className="block">Fee (USD)</label>
          <input type="number" name="fee" className="w-full border p-2 rounded-md" required />
        </div>
        <div>
          <label className="block">Validity (Months)</label>
          <input type="text" name="validity" className="w-full border p-2 rounded-md" required />
        </div>
        <div>
          <label className="block">Application Method</label>
          <input type="text" name="applicationMethod" className="w-full border p-2 rounded-md" required />
        </div>
        <div className="col-span-2">
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
            Add Visa
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVisa;

