export const searchByName = async (cityName = "London") => {
  try {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=5ec3935a8a17bca2b2f703624f8707d1`
    );
    const data = resp.json();
    return data;
  } catch (error) {}
};


// export const allinfoById = async (woeid = "2487956") => {
//   try {
//     const resp = await fetch(
//       `https://www.metaweather.com/api/location/${woeid}/`
//     );
//     const data = resp.json();
//     return data;
//   } catch (error) {}
// };

// export const allinfoByfecha = async(woeid = '2487956', year = '2021', month = '4', day = '25' ) => {
//     try {
//         const resp = await fetch(`https://www.metaweather.com/api/location/${woeid}/${year}/${month}/${day}/`);
//         const data = resp.json();
//         return data;
//     } catch (error) {

//     }
// }
