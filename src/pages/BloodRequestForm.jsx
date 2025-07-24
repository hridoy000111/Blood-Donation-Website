import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RequestContext } from "../Context/RequestContext.jsx";

const BloodRequestForm = () => {
  const { addRequest } = useContext(RequestContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    hospital: "",
    phone: "",
    date: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addRequest({ ...formData, id: Date.now() });
    navigate("/requestlist");

    // Reset the form
    setFormData({
      name: "",
      bloodGroup: "",
      hospital: "",
      phone: "",
      date: "",
      status: "Pending",
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-red-600 text-center">
          Request Blood
        </h2>

        <div className="mb-4">
          <label className="block font-medium mb-1">Receiver Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select</option>
            <option value="A+">A+</option>
            <option value="A-">A−</option>
            <option value="B+">B+</option>
            <option value="B-">B−</option>
            <option value="O+">O+</option>
            <option value="O-">O−</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB−</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Hospital Name</label>
          <input
            type="text"
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Date of Request</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default BloodRequestForm;
