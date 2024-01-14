import "./DisplayArea.css";
import sunnyImage from "../../assets/images/sunny.png";

export default function Forecast({ date, highTemp, lowTemp }) {
	return (
		<div className="forecast">
			<p>{date}</p>
			<img className="forecastImage" src={sunnyImage} alt="sunny icon" />
			<p>{highTemp}°C</p>
			<p>{lowTemp}°C</p>
		</div>
	);
}
