import React, { useEffect, useState } from 'react'
import  HomePage  from './components/HomePage';
import { HotelList } from './components/HotelList';
import apiConn from './components/apiConn';


function App() {

  const [hotels, setHotels] = useState([]);

  const getHotels = async () => {
    try {
      const response = await apiConn.get('hotels');
      setHotels(response.data);

    } catch(error) {
      console.log(`Unable to fetch hotels: ${error}`);
    }
  }

  useEffect(() => {
    getHotels()
  }, [])



  return (
    <div className="App">
      <HomePage />
   
      <HotelList hotels={hotels} /> {/* Pass the fetched hotels data as a prop */}
    </div>
  );
}

export default App;