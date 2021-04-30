import React, { useCallback, useEffect, useState } from "react";
import { convertGrades } from "./components/context/convertGrades";
import { fechaContext } from "./components/context/fechaContext";
import { infoContext } from "./components/context/infoContext";
import { searchContext } from "./components/context/searchContext";
import { useForm } from "./hooks/useForm";
import { AppRouters } from "./routers/AppRouters";

export const App = () => {
  const [dateActual, setDateActual] = useState({
    day: 10,
    month: 2,
    year: 2021,
  });

  const [values, handleInputChange] = useForm({
    cityName: "Montería",
  });

  const [city, setCity] = useState({});
  const [typeGrades, setTypeGrades] = useState(false);

  const dateNow = useCallback(( ) => {
    const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      setDateActual({
        ...dateActual,
        day,
        month,
        year,
      });
  },[dateActual])

  useEffect(() => {
    dateNow();
  }, []);

  return (
    <searchContext.Provider value={{ values, handleInputChange }}>
      <fechaContext.Provider value={{ dateActual }}>
        <convertGrades.Provider value={{typeGrades, setTypeGrades}}>      
          <infoContext.Provider value={{ city, setCity }}>
            <AppRouters />
          </infoContext.Provider>
        </convertGrades.Provider>
      </fechaContext.Provider>
    </searchContext.Provider>
  );
};
