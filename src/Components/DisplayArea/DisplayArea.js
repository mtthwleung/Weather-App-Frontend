import './DisplayArea.css'
import sunnyImage from "../../assets/images/sunny.png";
import cloudyImage from "../../assets/images/cloudy.png";
import rainyImage from "../../assets/images/rainy.png";
import umbrella from "../../assets/images/umbrella.png"
import droplet from "../../assets/images/droplet.png"
import Forecast from './Forecast';
import { useState } from 'react';

export default function DisplayArea({ weatherData }) {
	
	const [showFahrenheit, setShowFahrenheit] = useState(false);

	// return if no data loaded yet
	if (!weatherData) {
		//loader or spinner here
		return <div className="displayContainer">Loading</div>;
	}

	//displaying day of the week in the forecast
  const today = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat",];

  const day0 = daysOfWeek[today.getDay()];
  const day1 = daysOfWeek[(today.getDay() + 1) % 7];
  const day2 = daysOfWeek[(today.getDay() + 2) % 7];
  const day3 = daysOfWeek[(today.getDay() + 3) % 7];

	// assigning the correct image to the corresponding weather
	const getWeatherImage = weather => {
		if (weather === 'Sunny') {
			return sunnyImage;
		} else if (weather === 'Cloudy') {
			return cloudyImage;
		} else {
			return rainyImage;
		}
	}

	const day0Image = getWeatherImage(weatherData.day0.weather);
	const day1Image = getWeatherImage(weatherData.day1.weather);
	const day2Image = getWeatherImage(weatherData.day2.weather);
	const day3Image = getWeatherImage(weatherData.day3.weather);

	//toggling between celsius and fahrenheit
	const convertTemperaturesToFahrenheit = weatherData => {

		const convertedWeather = JSON.parse(JSON.stringify(weatherData)); // original data is not mutated

		for (const day in convertedWeather) {
			const temperatureInCelsius = convertedWeather[day].temperature;
			const temperatureInFahrenheit = Math.round(temperatureInCelsius * (9 / 5) + 32);
			convertedWeather[day].temperature = temperatureInFahrenheit;

			const lowTempInCelsius = convertedWeather[day].lowTemp;
			const lowTempInFahrenheit = Math.round(lowTempInCelsius * (9 / 5) + 32);
			convertedWeather[day].lowTemp = lowTempInFahrenheit;

			const highTempInCelsius = convertedWeather[day].highTemp;
			const highTempInFahrenheit = Math.round(highTempInCelsius * (9 / 5) + 32);
			convertedWeather[day].highTemp = highTempInFahrenheit;
		}
		return convertedWeather;
	};

	const weatherInFahrenheit = convertTemperaturesToFahrenheit(weatherData);

	const setFahrenheit = () => {
		setShowFahrenheit(true);
	}

	const setCelsius = () => {
		setShowFahrenheit(false);
	}

  return (
			<div className="displayContainer">
				<div className="todayWeather">
					<img className="mainImage" src={day0Image} alt="weather icon" />
					<div className="unit">
						<p className="temperature">
							{showFahrenheit
								? weatherInFahrenheit.day0.temperature
								: weatherData.day0.temperature}
						</p>
						<div
							className={showFahrenheit ? "symbol" : "selected-symbol"}
							onClick={setCelsius}
						>
							°C
						</div>
						<div>|</div>
						<div
							className={showFahrenheit ? "selected-symbol" : "symbol"}
							onClick={setFahrenheit}
						>
							°F
						</div>
					</div>
					<p className="weather">{weatherData.day0.weather}</p>
				</div>

				<div className="otherInfo">
					<div className="extraInfo">
						<img src={umbrella} alt="umbrella" />
						<p className="percentage">{weatherData.day0.precipitation}%</p>
						<p>Precipitation</p>
					</div>
					<div className="extraInfo">
						<img src={droplet} alt="water droplet" />
						<p className="percentage">{weatherData.day0.humidity}%</p>
						<p>Humidity</p>
					</div>
				</div>

				<div className="forecastContainer">
					<Forecast
						date={day0}
						highTemp={
							showFahrenheit
								? weatherInFahrenheit.day0.highTemp
								: weatherData.day0.highTemp
						}
						lowTemp={
							showFahrenheit
								? weatherInFahrenheit.day0.lowTemp
								: weatherData.day0.lowTemp
						}
						weatherImage={day0Image}
					/>
					<Forecast
						date={day1}
						highTemp={
							showFahrenheit
								? weatherInFahrenheit.day1.highTemp
								: weatherData.day1.highTemp
						}
						lowTemp={
							showFahrenheit
								? weatherInFahrenheit.day1.lowTemp
								: weatherData.day1.lowTemp
						}
						weatherImage={day1Image}
					/>
					<Forecast
						date={day2}
						highTemp={
							showFahrenheit
								? weatherInFahrenheit.day2.highTemp
								: weatherData.day2.highTemp
						}
						lowTemp={
							showFahrenheit
								? weatherInFahrenheit.day2.lowTemp
								: weatherData.day2.lowTemp
						}
						weatherImage={day2Image}
					/>
					<Forecast
						date={day3}
						highTemp={
							showFahrenheit
								? weatherInFahrenheit.day3.highTemp
								: weatherData.day3.highTemp
						}
						lowTemp={
							showFahrenheit
								? weatherInFahrenheit.day3.lowTemp
								: weatherData.day3.lowTemp
						}
						weatherImage={day3Image}
					/>
				</div>
			</div>
		);
}