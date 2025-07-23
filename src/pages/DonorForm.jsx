import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { DonorContext } from "../Context/DonorContext";

const DonorForm = () => {
  const { addDonor } = useContext(DonorContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    location: "",
    phone: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );
    if (isEmpty) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    addDonor({ ...formData, id: Date.now() });

    navigate("/donors");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-red-600">Become a Donor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "bloodGroup", "location", "phone"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        ))}
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Register as Donor
        </button>
      </form>
    </div>
  );
};

export default DonorForm;
