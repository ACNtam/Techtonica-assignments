import express from "express"
import fetch from "node-fetch"
import { config } from "dotenv";
config();

//to see if API key is correct, got error message that it was wrong one
console.log(process.env.API_KEY)

//Ccreating an instance of express
const app = express()

//api route a get request
app.get("/weather", (req, res) => {
    const params = new URLSearchParams({

        //static city name
      q: "San Francisco",
      appid: process.env.API_KEY,
      units: "imperial",
    });
    const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;
    console.log(url);

    //a promise type, fetching to the openweather API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {

        // extracted data from data object
        let weather = {
            cityName:data.name,
            humidity:data.main.humidity,
            windSpeed:data.wind.speed,
            lat:data.coord.lat,
            lon:data.coord.lon,
            weather:data.weather[0],
            temp:data.main.temp,
            date:data.dt
        }

        //sending response to client which is weather
        res.json(weather);
      })
      .catch((err) => {
        console.log(err);
      });
  });




  //console.log server is running
app.listen(4040,()=>{
    console.log("server listening at port 4040")
})

