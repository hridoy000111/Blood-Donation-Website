import React, { useContext } from "react";
import { RequestContext } from "../Context/RequestContext.jsx";

const RequestList = () => {
  const { requests, markAsCollected } = useContext(RequestContext);

  if (requests.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center text-white">
        No blood requests found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
        Blood Requests
      </h2>
      <div className="grid gap-6">
        {requests.map((req) => (
          <div
            key={req.id}
            className="bg-white rounded shadow p-4 border-l-4 border-red-600"
          >
            <h3 className="text-xl font-semibold mb-1">{req.name}</h3>
            <p>
              <strong>Blood Group:</strong> {req.bloodGroup}
            </p>
            <p>
              <strong>Phone:</strong> {req.phone}
            </p>
            <p>
              <strong>Hospital:</strong> {req.hospital}
            </p>
            <p>
              <strong>Date:</strong> {req.date}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`$ {
                  req.status === "Donated"
                    ? "text-green-600 font-semibold"
                    : "text-yellow-600 font-semibold"
                }`}
              >
                {req.status}
              </span>
            </p>

            {req.status !== "Collected" && (
              <button
                onClick={() => markAsCollected(req.id)}
                className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
              >
                Mark as Collected
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default RequestList;
