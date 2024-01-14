import './DisplayArea.css'
import sunnyImage from "../../assets/images/sunny.png";
import umbrella from "../../assets/images/umbrella.png"
import droplet from "../../assets/images/droplet.png"
import Forecast from './Forecast';

export default function DisplayArea() {
  const today = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat",];

  const day0 = daysOfWeek[today.getDay()];
  const day1 = daysOfWeek[(today.getDay() + 1) % 7];
  const day2 = daysOfWeek[(today.getDay() + 2) % 7];
  const day3 = daysOfWeek[(today.getDay() + 3) % 7];

  //dummy data
  const temperature = 18
  const weather = "Sunny"
  
  return (
			<div className="displayContainer">
				<div className="todayWeather">
					<img className="mainImage" src={sunnyImage} alt="sunny icon" />
        <p className="temperature">{temperature}°C</p>
        <p className="weather">{weather}</p>
				</div>

				<div className="otherInfo">
					<div className="extraInfo">
						<img src={umbrella} alt="umbrella" />
						<p className="percentage">30%</p>
						<p>Precipitation</p>
					</div>
					<div className="extraInfo">
						<img src={droplet} alt="water droplet" />
						<p className="percentage">20%</p>
						<p>Humidity</p>
					</div>
				</div>

				<div className="forecastContainer">
					<Forecast date={day0} highTemp={20} lowTemp={10} />
					<Forecast date={day1} highTemp={18} lowTemp={11} />
					<Forecast date={day2} highTemp={14} lowTemp={13} />
					<Forecast date={day3} highTemp={20} lowTemp={14} />
				</div>
			</div>
		);
}