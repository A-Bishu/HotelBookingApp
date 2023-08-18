<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import  HomePage  from './components/HomePage';
import { HotelList } from './components/HotelList';
import apiConn from './components/apiConn';

=======
import React from 'react'
import './App.css';
import { ReservationForm } from './components/ReservationForm/ReservationForm';
import { HomePage } from './components/HomePage/HomePage';
import { HotelList } from './components/HotelList/HotelList';
>>>>>>> ab12e7eede11f2f991b21901bb5112d7cb42e2ca

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
<<<<<<< HEAD
   
      <HotelList hotels={hotels} /> {/* Pass the fetched hotels data as a prop */}
=======
      <HotelList />
      {/* Put reservation at the bottom so it displays last KK */}
      <ReservationForm /> 
>>>>>>> ab12e7eede11f2f991b21901bb5112d7cb42e2ca
    </div>
  );
}

export default App;