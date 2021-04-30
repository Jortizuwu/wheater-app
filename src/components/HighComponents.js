import React, { useContext } from "react";
import { infoContext } from "./context/infoContext";

export const HighComponents = () => {
  const { city } = useContext(infoContext);

  return (
    <div className="wind">
      {city &&
        city?.list?.slice(0, 1).map((info) => {
          return (
            <div className="wind-container" key={info.dt}>
              <div className="state">
                <h5 className="text-center status">Wind status</h5>
                <div className="mph-container">
                  <h2 className="text-center state-mph">
                    {(info?.wind.speed)}
                  </h2>
                  <span className="mph">mph</span>
                </div>
                <h5 className="text-center status">
                  <li className="fas fa-wind"></li>
                  wsw
                </h5>
              </div>
              <div className="state">
                <h5 className="text-center status">humidity</h5>
                <div className="mph-container">
                  <h2 className="text-center state-mph">{info?.main.humidity}</h2>
                  <span className="porcentaje">%</span>
                </div>
                <div className="valores-temp">
                  <p>1</p>
                  <p>50</p>
                  <p>100</p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: Math.round(info?.main.humidity) }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="valores-temp por--">
                  <p>%</p>
                </div>
              </div>

              <div className="state">
                <h5 className="text-center status">Visibility</h5>
                <div className="mb-container">
                  <h2 className="text-center state-mph">
                    {info?.main.sea_level.toFixed(1)}
                  </h2>
                  <span className="mph"> miles</span>
                </div>
              </div>

              <div className="state">
                <h5 className="text-center status">Air Pressure</h5>
                <div className="mb-container">
                  <h2 className="text-center state-mph">
                    {Math.round(info?.main.pressure)}
                  </h2>
                  <span className="mph">mb</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
