import { useState, useEffect } from "react";


function App() {
  
  const [weather, setWeather] = useState({})
  //console.log(weather)

  //fetch request everytime the component is loaded, useEffect is executed
  useEffect(() => {
    fetch("/weather")

      //callback will accept response from server
      .then((res) => {
        //converting json to js object format
        return res.json()
      })
      //updating the weather state with data received from fetch request
      .then((data) => {
        setWeather(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (

    //jsx populate the state data 
    <div className="App">
      <h1>{weather.cityName}</h1>
      <img src={"https://openweathermap.org/img/wn/" + weather?.weather?.icon + "@2x.png"} />  
      <h3>Temperature: {weather.temp} <span>&#176;</span> F</h3>
      <p>Date: {weather.date}</p>
      <p>WindSpeed: {weather.windSpeed}</p>
      <p>Lat: {weather.lat}</p>
      <p>Lon: {weather.lon}</p>
      <p>Humidity: {weather.humidity}</p>
    </div>
  );
}

export default App;

// {
//   "cityName": "San Francisco",
//   "humidity": 58,
//   "windSpeed": 8.01,
//   "lat": 37.7749,
//   "lon": -122.4194,
//   "weather": {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01d"
//   },
//   "temp": 79.86,
//   "date": 1662659915
// }