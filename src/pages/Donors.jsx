import React, { useContext } from "react";
import { DonorContext } from "../Context/DonorContext";

const Donors = () => {
  const { donors, markAsDonated } = useContext(DonorContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
        Available Donors
      </h2>
      <div className="grid gap-6">
        {donors.map((donor) => (
          <div
            key={donor.id}
            className="bg-white rounded shadow p-4 border-l-4 border-green-600"
          >
            <h3 className="text-xl font-semibold mb-1">{donor.name}</h3>
            <p>
              <strong>Blood Group:</strong> {donor.bloodGroup}
            </p>
            <p>
              <strong>Phone:</strong> {donor.phone}
            </p>
            <p>
              <strong>Location:</strong> {donor.location}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={
                  donor.status === "Available"
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }
              >
                {donor.status}
              </span>
            </p>
            {donor.phone && (
              <a
                href={`https://wa.me/${donor.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-70 mr-4"
              >
                Contact via WhatsApp
              </a>
            )}

            {donor.status === "Available" && (
              <button
                onClick={() => markAsDonated(donor.id)}
                className="mt-3 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Mark as Donated
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donors;
