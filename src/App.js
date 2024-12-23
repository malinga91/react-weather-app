import logo from './logo.svg';
import React, { useState } from "react";
import axios from "axios";

import './App.css';
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    const API_KEY = "0c05f4cf4df75b07ad907f5e7af1ac5c"; // Replace with your OpenWeatherMap API key
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(URL);
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found!");
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={fetchWeather} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      { weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
