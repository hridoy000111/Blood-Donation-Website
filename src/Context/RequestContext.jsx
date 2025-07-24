import { useState, useEffect, createContext } from "react";

export const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [requests, setRequests] = useState(() => {
    const saved = localStorage.getItem("requests");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("requests", JSON.stringify(requests));
  }, [requests]);

  const addRequest = (request) => {
    setRequests([...requests, request]);
  };
  const markAsCollected = (id) => {
    const updated = requests.map((r) =>
      r.id === id ? { ...r, status: "Collected" } : r
    );
    setRequests(updated);
    localStorage.setItem("requests", JSON.stringify(updated));
  };

  return (
    <RequestContext.Provider value={{ requests, addRequest, markAsCollected }}>
      {children}
    </RequestContext.Provider>
  );
};
