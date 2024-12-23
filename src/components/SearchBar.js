import {React, useState} from 'react'

function SearchBar({onSearch}) {

    const [city, setCity] = useState("");

    const handleSearch = () => {
        if(city.trim()) {
            onSearch(city);
            setCity("");
        }
    }

  return (
    <div>
        <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
  </div>
  )
}

export default SearchBar