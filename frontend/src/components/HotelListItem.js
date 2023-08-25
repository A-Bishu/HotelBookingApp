
//HotelListItem.js
import { useState } from "react";
import { ReservationForm } from "./ReservationForm";

export function HotelListItem({ hotelObject }) {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleReserveClick = () => {
        setIsFormVisible(true);
    };

    const handleReserve = (reservationData) => {
        
        console.log("Reservation data:", reservationData);
        setIsFormVisible(false);
    };

    return (
        <div className="hotel">
          <div className="hotel-details">
            <h2>{hotelObject.name}</h2>
            <p>{hotelObject.description}</p>
            <p>Location: {hotelObject.location}</p>
            <p>Price per Night: ${hotelObject.price_per_night}</p>
            <button onClick={handleReserveClick}>Reserve</button>
          </div>
          {isFormVisible && (
            <div className="reservation-form-container">
              <ReservationForm hotelId={hotelObject.id} onReserve={handleReserve} />
            </div>
          )}
        </div>
      );
      
}
