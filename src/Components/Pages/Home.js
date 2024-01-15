import '../../App.css';
import DisplayArea from '../DisplayArea/DisplayArea';
import SearchBar from '../SearchBar/SearchBar';
import { useState, useEffect } from "react";


export default function Home() {

  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  //setting default info on page load to be London's weather
  const [cityName, setCityName] = useState("London");
  const capitalizedName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

  const defaultWeather = async () => {
    try {
      const response = await fetch(`http://localhost:8000/weather/london`)
      if (response.ok) {
        const data = await response.json();
        console.log('successfully fetched data!')
        setWeatherData(data);
      } else {
      console.log('Error: ', response.status )
      }
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  useEffect(() => {
    defaultWeather();
  }, [])

  return (
    <div className="container">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        setCityName={setCityName}
      />

      <p className="city">{capitalizedName}</p>
      <p className="date">{formattedDate}</p>

      <DisplayArea
        weatherData={weatherData}
      />
    </div>
  );
}