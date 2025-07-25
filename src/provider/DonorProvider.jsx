import { useEffect, useState } from "react";
import { DonorContext } from "../Context/DonorContext";

const DonorProvider = ({ children }) => {
  const [donors, setDonors] = useState(() => {
    const saved = localStorage.getItem("donors");
    return saved ? JSON.parse(saved) : [];
  });

  const addDonor = (newDonor) => {
    const updated = [...donors, newDonor];
    setDonors(updated);
    localStorage.setItem("donors", JSON.stringify(updated));
  };

  const markAsDonated = (id) => {
    setDonors((prevDonors) =>
      prevDonors.map((donor) =>
        donor.id === id ? { ...donor, status: "Donated" } : donor
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("donors", JSON.stringify(donors));
  }, [donors]);

  return (
    <DonorContext.Provider value={{ donors, addDonor, markAsDonated }}>
      {children}
    </DonorContext.Provider>
  );
};

export default DonorProvider;
