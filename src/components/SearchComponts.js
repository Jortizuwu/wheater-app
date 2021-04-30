import React, { useContext } from "react";
import { infoContext } from "./context/infoContext";
import { searchContext } from "./context/searchContext";
import { searchByName } from "../api/getInfoByApi";

export const SearchComponts = ({ setBuscar, buscar }) => {
  const { setCity } = useContext(infoContext);
  const { values, handleInputChange } = useContext(searchContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setBuscar(!buscar);
    const res = await searchByName(values.cityName);
    setCity(res);
  };

  return (
    <div
      className="navbar container animate__animated animate__slideInLeft"
      style={{ alignContent: "flex-start" }}
    >
      <div className="close-container">
        <button
          onClick={() => {
            setBuscar(!buscar);
          }}
          className="close"
        >
          <i
            className="fas fa-times"
            style={{
              width: "40px",
              margin: "0px",
              background: "#1E213A",
              color: "white",
            }}
          ></i>
        </button>
      </div>
      <form onSubmit={handleSubmit} className="nav__form">
        <div className="input-container">
          <i
            className="fas fa-search"
            style={{
              fontSize: ".9rem",
              borderRadius: "0px",
              background: "#1E213A",
              margin: "0",
            }}
          ></i>
          <input
            className="input"
            onChange={handleInputChange}
            name="cityName"
            type="search"
            placeholder="Search"
            aria-label="Search"
            autoComplete="off"
          />
        </div>
        <button className="btn-search" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
