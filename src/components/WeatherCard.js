import React from 'react'

function WeatherCard({ data }) {
    const { name, main, weather, ...more } = data;

  return (
    <div>
        <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      /> 
      <h1>{main.temp}°C</h1>
      <h2>{name}</h2>
      <p>Condition: {weather[0].description}</p>
      <p>Wind Speed: {more.wind.speed}</p>
      
    </div>
  )
}

export default WeatherCard