import React from 'react'
import {useState} from 'react';
import Head from 'next/head'
import Nav from '../components/nav'
import SearchBar from '../components/search-bar';
import WeatherList from '../components/weather-list';

const axios = require('axios');

const getWeatherForCity = (city, setWeather) => {
    axios.get('/api/weather', {params: {city: city}}).then((res) => {
      let weather = res.data;
      console.log(weather);
      setWeather([weather]);

      }).catch((err) => {
        console.log(err);
      });
};

const Home = () => {
  let [weather, setWeather] = useState();

return (
  <div>
    <Head>
      <title>Weather App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <div className="container">
      <h1 className="title">Search for weather by city name</h1>
      <SearchBar handleSubmit={(city) => { getWeatherForCity(city, setWeather); }} />
      <WeatherList weatherData={weather}/>
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
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
  );
}
export default Home
