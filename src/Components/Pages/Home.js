import '../../App.css';
import DisplayArea from '../DisplayArea/DisplayArea';
import SearchBar from '../SearchBar/SearchBar';

export default function Home() {

  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  //dummy data
  const city = "Tokyo"

  return (
    <div className="container">
      <SearchBar />

      <p className="city">{city}</p>
      <p className="date">{formattedDate}</p>

      <DisplayArea />
    </div>
  );
}