import React, { useState, createContext } from "react";

export const InfoContexts = createContext();

const Providers = ({ children }) => {
  const [Info, setInfo] = useState({
    subjects: [
      {
        name: "알고리즘",
        numberOfTeams: 0,
        numberOfPeoplePerTeam: 0,
        students: [
          {
            name: "홍길동",
            weights: [
              {
                name: "가중치1",
                value: 10,
              },
            ],
          },
        ],
        weights: [
          {
            name: "가중치1",
            value: 10,
          },
        ],
        teams: [],
      },
      {
        name: "데이터 베이스",
        numberOfTeams: 0,
        numberOfPeoplePerTeam: 0,
        students: [],
        weights: [
          {
            name: "가중치1",
            value: 10,
          },
        ],
        teams: [],
      },
    ],
    selectedSubject: 0,
  });

  return (
    <InfoContexts.Provider value={{ ...Info, setInfo }}>
      {children}
    </InfoContexts.Provider>
  );
};

export default Providers;
