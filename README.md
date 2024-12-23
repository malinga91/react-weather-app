# Weather App

A simple and user-friendly Weather App built with React that allows users to fetch and display current weather information for any city using the OpenWeatherMap API.

### Features

- Search for weather information by city name.
- Display current temperature, weather conditions, and an icon.
- User-friendly interface with real-time API integration.

### Technologies Used

- **React**: For building the user interface.
- **Axios**: For handling HTTP requests.
- **OpenWeatherMap API**: For fetching weather data.

### Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/malinga91/weather-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd weather-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Get your API key from [OpenWeatherMap](https://openweathermap.org/):**
   
   Add it to the `App.js` file:
   
   ```javascript
   const API_KEY = "YOUR_API_KEY";
   ```

5. **Start the development server:**

   ```bash
   npm start
   ```

### Usage

1. Enter the name of the city in the search bar.
2. Click on the "Search" button.
3. View the current weather details including:
   - Temperature (in Celsius)
   - Weather condition (e.g., Clear, Rainy)
   - Weather icon

### File Structure

```
src/
├── components/
│   ├── SearchBar.js       // Component for city search input
│   └── WeatherCard.js     // Component for displaying weather details
├── App.js                 // Main app logic
├── App.css                // Styling for the app
```

### Future Improvements

- Add a 5-day weather forecast feature.
- Implement unit switching (Celsius/Fahrenheit).
- Display additional weather details (humidity, wind speed, etc.).
- Enhance UI with animations and loading indicators.

### Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

### License

This project is licensed under the [MIT License](LICENSE).

