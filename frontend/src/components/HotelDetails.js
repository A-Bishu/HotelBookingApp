import React from 'react';

export function HotelDetails({ hotel, onBack }) {
  return (
    <div className="hotel-details">
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
      <p>Location: {hotel.location}</p>
      <p>Price per Night: ${hotel.price_per_night}</p>
      <p>Number of Rooms: {hotel.number_of_rooms}</p>
      <p>Amenities: {hotel.amenities.join(', ')}</p>
      <p>Ratings: {hotel.ratings}</p>
      <button onClick={onBack}>Back to List</button>
    </div>
  );
}
