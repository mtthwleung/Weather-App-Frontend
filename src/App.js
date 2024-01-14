import './App.css';
import DisplayArea from './Components/DisplayArea/DisplayArea';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  
  return (
    <div className="container">

      {/* Navbar */}
      <SearchBar />

      <p className="header">Hong Kong</p>
      <p className="header">{formattedDate}</p>

      <DisplayArea />
    </div>
  );
}

export default App;
