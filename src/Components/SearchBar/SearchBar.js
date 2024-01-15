import { useEffect } from "react";
import "./SearchBar.css";


export default function SearchBar({
  searchTerm,
  setSearchTerm,
  weatherData,
  setWeatherData,
  setCityName
}) {

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('searching for ', searchTerm)

    try {
      const response = await fetch(`http://localhost:8000/weather/${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setCityName(searchTerm)
        setWeatherData(data);
      } else {
        console.log('Error: ', response.status )
      }
    } catch (error) {
      console.log('Error', error);
    }

    setSearchTerm('');
  }

  useEffect(() => {
    console.log(weatherData)
  }, [weatherData])

  return (
    <div className="searchBarContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search City"
          value={searchTerm}
          onChange={handleChange}
          className="input"
        />
      </form>
    </div>
  )
}