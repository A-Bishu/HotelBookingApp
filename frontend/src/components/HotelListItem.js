/*
export function HotelListItem({hotelObject}) {

    return(
        <article className="HotelListItem-article">
            <h2>{hotelObject.name}</h2>
            <h3>{hotelObject.description}</h3>
            <h4>Rated {hotelObject.ratings} out of 5.0</h4>
            <p>Amenities:</p>
            <ul>{hotelObject.amenities.map(amenity => <li key={amenity}>{amenity}</li>)}</ul>
            <p>Located in {hotelObject.location}</p>
            <p>${hotelObject.price_per_night} per night</p>
            <p>{hotelObject.number_of_rooms} rooms available</p>
        </article>
    );
}
*/

import { useState } from "react";
import { ReservationForm } from "./ReservationForm";

export function HotelListItem({ hotelObject }) {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleReserveClick = () => {
        setIsFormVisible(true);
    };

    const handleReserve = (reservationData) => {
        // You can handle the reservation data here, for example, send it to a backend API
        console.log("Reservation data:", reservationData);
        setIsFormVisible(false);
    };

    return (
        <div className="hotel">
            <h2>{hotelObject.name}</h2>
            <p>{hotelObject.description}</p>
            <p>Location: {hotelObject.location}</p>
            <p>Price per Night: ${hotelObject.price_per_night}</p>
            <button onClick={handleReserveClick}>Reserve</button>
            {isFormVisible && (
                <ReservationForm hotelId={hotelObject.id} onReserve={handleReserve} />
            )}
        </div>
    );
}
