import React, { useContext } from "react";
import { convertGrades } from "./context/convertGrades";
import { infoContext } from "./context/infoContext";
import { Img } from "./Img";

export const CardComponents = () => {

  const { city } = useContext(infoContext);
  const { typeGrades } = useContext(convertGrades);
  
  return (
    <div className="card__container">
      {city &&
        city?.list?.slice(1, 6).map((info) => {
          return (
            <div className="card" key={info.dt} style={{height: "200px"}}>
              <div className="card-body">
                <h5 className="text-center font-size-uwu font-weigth">
                  {info.dt_txt}
                </h5>
                <figure>
                  <Img img={info?.weather[0].main} />
                </figure>
                {(typeGrades) ? 
                <div className="card-temp">
                  <h5 className="font-weigth ">
                    {Math.round(info?.main?.temp_max)}°K
                  </h5>
                  <h5 className="font-weigth font-size-uwu ">
                    {Math.round(info?.main?.temp_min)}°k
                  </h5>
                </div>
              :  
                <div className="card-temp">
                <h5 className="font-weigth">
                  { Math.round((info?.main?.temp_max) - 274)}°C
                </h5>
                <h5 className="font-weigth font-size-uwu">
                  {Math.round(info?.main?.temp_min) - 274}°C
                </h5>
              </div>
              }
              </div>
            </div>
          );
        })}
    </div>
  );
};
