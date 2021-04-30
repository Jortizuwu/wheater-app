import React, { useContext } from "react";
import { CardComponents } from "./CardComponents";
import { convertGrades } from "./context/convertGrades";
import { infoContext } from "./context/infoContext";
import { HighComponents } from "./HighComponents";

export const HomeScreen = () => {
  const { city } = useContext(infoContext);
  const { setTypeGrades, typeGrades } = useContext(convertGrades);

  const handleConverGrades = () => {
    setTypeGrades(!typeGrades);
  };

  return (
    <div className="body animate__animated animate__fadeIn">
      {city && (
        <div className=" container animate__animated animate__fadeIn">
          <div className="change-temp">
            <button
              onClick={handleConverGrades}
              className={
                !typeGrades
                  ? "btn-termo text-center"
                  : "btn-termo text-center false"
              }
            >
              °K
            </button>
            <button
              onClick={handleConverGrades}
              className={
                typeGrades
                  ? "btn-termo text-center"
                  : "btn-termo text-center false"
              }
            >
              °C
            </button>
          </div>
          <div className="animate__animated animate__fadeIn">
            <CardComponents />
          </div>
          <div className="w-80 animate__animated animate__fadeIn">
            <h1 className="home-title">Today's Hightlights</h1>
          </div>
          <div className="animate__animated animate__fadeIn">
            <HighComponents />
          </div>
          <h5 className="footer">create by Jose Ortiz - devChallenges.io</h5>
        </div>
      )}
    </div>
  );
};
