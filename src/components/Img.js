import React from "react";
import clear from "../assets/img/Clear.png";
import Hail from "../assets/img/Hail.png";
import HeavyCloud from "../assets/img/HeavyCloud.png";
import HeavyRain from "../assets/img/HeavyRain.png";
import LightCloud from "../assets/img/LightCloud.png";
import LightRain from "../assets/img/LightRain.png";
import Shower from "../assets/img/Shower.png";
import Sleet from "../assets/img/Sleet.png";
import Snow from "../assets/img/Snow.png";
import Thunderstorm from "../assets/img/Thunderstorm.png";

export const Img = ({ img }) => {
  switch (img) {
    case "Clear":
      return <img className="img__card" src={clear} alt={clear} />;
    case "Hail":
      return <img className="img__card" src={Hail} alt={Hail} />;
    case "Clouds":
      return <img className="img__card" src={HeavyCloud} alt={HeavyCloud} />;
    case "Extreme":
      return <img className="img__card" src={HeavyRain} alt={HeavyRain} />;
    case "Light":
      return <img className="img__card" src={LightCloud} alt={LightCloud} />;
    case "Rain":
      return <img className="img__card" src={LightRain} alt={LightRain} />;
    case "Shower":
      return <img className="img__card" src={Shower} alt={Shower} />;
    case "Sleet":
      return <img className="img__card" src={Sleet} alt={Sleet} />;
    case "Snow":
      return <img className="img__card" src={Snow} alt={Snow} />;
    case "Thunderstorm":
      return <img className="img__card" src={Thunderstorm} alt={Thunderstorm} />;
    default:
      return <img className="img__card" src={Snow} alt={Snow} />;
  }
};
