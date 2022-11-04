import React, { useState, createContext } from "react";

export const InfoContexts = createContext();

const Providers = ({ children }) => {
  const [Info, setInfo] = useState({
    subjectNames: ["알고리즘", "데이터 베이스"],
    selectedSubject: "알고리즘",
  });

  return (
    <InfoContexts.Provider value={{ ...Info, setInfo }}>
      {children}
    </InfoContexts.Provider>
  );
};

export default Providers;
