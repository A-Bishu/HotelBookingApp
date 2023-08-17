import { useState } from "react";

const HotelDropdown = () => {
    const [selectedHotel, setSelectedHotel] = useState('');
  
    const handleHotelChange = (event) => {
      setSelectedHotel(event.target.value);
    };
  
    return (
      <div>
        <h2>Select a Hotel:</h2>
        <select value={selectedHotel} onChange={handleHotelChange}>
          <option value="">Select an option</option>
          <option value="ritz">The Ritz-Carlton</option>
          <option value="skylight">The Sky light</option>
          <option value="hilton">Hilton</option>
        </select>
        {selectedHotel && (
          <p>You selected: {selectedHotel === "ritz" ? "The Ritz-Carlton" : selectedHotel === "skylight" ? "The Sky light" : "Hilton"}</p>
        )}
      </div>
    );
  };
  
  export default HotelDropdown;