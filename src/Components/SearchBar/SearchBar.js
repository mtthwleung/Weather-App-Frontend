import { useState } from "react";
import "./SearchBar.css";


export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('searching for ', searchTerm)
    setSearchTerm('');
  }

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