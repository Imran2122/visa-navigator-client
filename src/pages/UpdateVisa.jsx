import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateVisa = () => {
  const update = useLoaderData();
  const { user } = useLoaderData();

  const handleUpdateVisa = (e) => {
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

    fetch(`http://localhost:5000/add-visa/${update._id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(visaData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount>0){
            Swal.fire('successfully update data ')
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Update Visa</h2>
      <form onSubmit={handleUpdateVisa} className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">Country Image URL</label>
          <input
            defaultValue={update.countryImage}
            type="text"
            name="countryImage"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block">Country Name</label>
          <input
            defaultValue={update.countryName}
            type="text"
            name="countryName"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block">Visa Type</label>
          <select
            name="visaType"
            defaultValue={update.visaType}
            className="w-full border p-2 rounded-md"
            required
          >
            <option value="Tourist visa">Tourist Visa</option>
            <option value="Student visa">Student Visa</option>
            <option value="Official visa">Official Visa</option>
          </select>
        </div>
        <div>
          <label className="block">Processing Time</label>
          <input
            defaultValue={update.processingTime}
            type="text"
            name="processingTime"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block">Required Documents</label>
          <div className="flex gap-4">
            <label>
              <input
                type="checkbox"
                name="passport"
                defaultChecked={update.requiredDocuments?.passport}
              />{" "}
              Valid Passport
            </label>
            <label>
              <input
                type="checkbox"
                name="applicationForm"
                defaultChecked={update.requiredDocuments?.applicationForm}
              />{" "}
              Visa Application Form
            </label>
            <label>
              <input
                type="checkbox"
                name="photo"
                defaultChecked={update.requiredDocuments?.photo}
              />{" "}
              Passport-sized Photo
            </label>
          </div>
        </div>
        <div className="col-span-2">
          <label className="block">Description</label>
          <textarea
            defaultValue={update.description}
            name="description"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block">Age Restriction</label>
          <input
            defaultValue={update.ageRestriction}
            type="number"
            name="ageRestriction"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block">Fee (USD)</label>
          <input
            defaultValue={update.fee}
            type="number"
            name="fee"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block">Validity (Months)</label>
          <input
            defaultValue={update.validity}
            type="text"
            name="validity"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block">Application Method</label>
          <input
            defaultValue={update.applicationMethod}
            type="text"
            name="applicationMethod"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md"
          >
            Update Visa
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateVisa;
