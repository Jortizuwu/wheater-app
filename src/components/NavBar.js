import React, { useContext, useEffect, useState } from "react";
import { searchByName } from "../api/getInfoByApi";
import { allImgs } from "../data/Allimg";
import { convertGrades } from "./context/convertGrades";
// import { fechaContext } from "./context/fechaContext";
import { infoContext } from "./context/infoContext";
import { searchContext } from "./context/searchContext";
import { SearchComponts } from "./SearchComponts";

export const NavBar = () => {
  const keys = Object.keys(allImgs);
  const { values } = useContext(searchContext);
  const { setCity, city } = useContext(infoContext);
  // const { dateActual } = useContext(fechaContext);
  const [imgValue, setImgValue] = useState([]);
  const [buscar, setBuscar] = useState(false);
  // const { day, month, year } = dateActual;
  const { typeGrades } = useContext(convertGrades);

  useEffect(() => {
    const actual = async () => {
      const res = await searchByName(values.cityName);
      setCity(res);
    };
    actual();
  }, [setCity, values.cityName]);

  useEffect(() => {
    const imgState = () => {
      if (city) {
        const img_type = city?.list?.find((le) => le.weather);
        const type = keys?.find((types) =>
          img_type?.weather.find((yes) => yes.main === types)
        );
        const img = allImgs[type];
        setImgValue(img);
      }
    };
    imgState();
  }, [keys, city]);

  const handleSearch = () => {
    setBuscar(!buscar);
  };

  return (
    <div>
      {!buscar ? (
        <nav className="navbar navbar-expand-ms animate__animated animate__slideInLeft">
          <div className="container-fluid">
            <div className="container">
              <div className="nav-item more-city">
                <button onClick={handleSearch} className="btn-more-city">
                  Search for places
                </button>
                <h5 className="text-center status">
                  <i
                    className="fas fa-search-location"
                    style={{ fontSize: "15px" }}
                  ></i>
                </h5>
              </div>
              <div className="navbar-nav" id="navbarNav">
                {city &&
                  city?.list?.slice(0, 1).map((info) => {
                    return (
                      <div
                        key={info.dt}
                        className="todo-conta animate__animated animate__fadeIn"
                      >
                        <figure className="nav__figure">
                          <img
                            className="img-state"
                            src={imgValue}
                            alt={imgValue}
                          />
                        </figure>
                        {typeGrades ? (
                          <div className="maxtempo">
                            <h3 className="nav__maxtempo text-center">
                              {Math.ceil(info?.main?.temp_max)}
                            </h3>
                            <h3 className="maxtempo-grades">°K</h3>
                          </div>
                        ) : (
                          <div className="maxtempo">
                            <h3 className="nav__maxtempo text-center">
                              {Math.ceil(info?.main?.temp_max - 274)}
                            </h3>
                            <h3 className="maxtempo-grades">°C</h3>
                          </div>
                        )}

                        <div className="nav-item clear-state">
                          <h3 className="text-center clear-font">
                            {info.weather[0].main}
                          </h3>
                          <h5 className="text-center">
                            {info.weather[0].description}
                          </h5>
                        </div>

                        <div className="nav-item today-state">
                          <div className="text-center">
                            <span>Today - {info.dt_txt} </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <h5 className="text-center nav-item city-actual">
                  {city?.city?.name}
                </h5>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <SearchComponts setBuscar={setBuscar} buscar={buscar} />
      )}
    </div>
  );
};
