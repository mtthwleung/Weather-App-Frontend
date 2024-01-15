import "./DisplayArea.css";

export default function Forecast({ date, highTemp, lowTemp, weatherImage }) {
	return (
		<div className="forecast">
			<p>{date}</p>
			<img className="forecastImage" src={weatherImage} alt="sunny icon" />
			<p>{highTemp}°C</p>
			<p>{lowTemp}°C</p>
		</div>
	);
}
