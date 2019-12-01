import React from 'react'
import {useState} from 'react';
import Head from 'next/head'
import Nav from '../components/nav'
import SearchBar from '../components/search-bar';
import WeatherList from '../components/weather-list';
import ClearWeatherDataButton from '../components/clear-weather-data-button';
import {isCityWeatherListed} from '../weather-util';

const axios = require('axios');


// Home is a component representing the only page of the application.
const Home = () => {
  // WeatherData is an array of weather readings for various cities.
  let [weatherData, setWeatherData] = useState([]);

  //  Wipe all weather readings from the weather data array.
  const clearWeatherData = () => {
    setWeatherData([]);
  };

  // Fetch the weather reading for a given city.
  const getWeatherForCity = (city) => {
    // Send a GET request to our API, to retrieve the reading.
    axios.get('/api/weather', {params: {city: city}}).then((res) => {
      let fetchedWeather = res.data;
      // If there is not already a weather reading for the city
      // add it to the array of weather readings to be displayed.
      if (!isCityWeatherListed(fetchedWeather, weatherData)) {
        // Create a copy of the weatherData array.
        const newWeather = [...weatherData];
        // Prepend the latest fetched weather reading to the new array
        // (so that it will be displayed at the top of the list).
        newWeather.unshift(fetchedWeather);
        // Replace the old weatherData with the new weather data array.
        setWeatherData(newWeather);
      }
      // If something went wrong
      }).catch((err) => {
        // Display a warning to the user.
        window.alert("Unfortunately, the weather reading for the input city could not be retrieved. Please try again.")
      });
};

return (
  <div>
    <Head>
      <title>Weather App</title>
    </Head>

    <Nav />
    <div className="container">
      <h1 className="title">Search for weather by city name</h1>
      <SearchBar handleSubmit={(city) => { getWeatherForCity(city); }} />
      <WeatherList weatherData={weatherData}/>
      <ClearWeatherDataButton weatherDataLength={weatherData.length} handleClick={clearWeatherData} />
    </div>


    <style jsx>{`
      .container {
        max-width: 720px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        color: #333;
      }
      .title {
        font-weight: normal;
        margin-bottom: 32px;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 40px;
      }
      .title,
      .description {
        text-align: center;
      }

      @media(max-width: 768px) {
        .container {
          padding: 16px;
          box-sizing: border-box;
        }
      }
    `}</style>
  </div>
  );
}
export default Home
