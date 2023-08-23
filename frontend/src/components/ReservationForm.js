
/*
export function ReservationForm (){
    return (
      <>
        <h3>Reservation Form</h3>
        <form className="reservation-form" action="reservation.php" method="post">
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required/>
          </div>
          <div>
            <label htmlFor="email">Your E-mail</label>
            <input type="email" id="email" required/>
          </div>
          <div>
            <label htmlFor="phone">Your Phone</label>
            <input type="tel" id="phone" required/>
          </div>
          
          <div>
            <label htmlFor="adult">Adults</label>
            <input type="number" id="adult" min="1" required/>
          </div>
          <div>
            <label htmlFor="child">Children</label>
            <input type="number" id="child" min="0" required/>
          </div>
          <div>
            <label htmlFor="checkin-date">Check-in Date</label>
            <input type="date" id="checkin-date" required/>
          </div>
          <div>
            <label htmlFor="checkout-date">Check-out Date</label>
            <input type="date" id="checkout-date" required/>
          </div>
          <div>
            <label htmlFor="room-selection">Select room preference</label>
            <select id="room-selection" required>
                <option value="">List of rooms</option>
            </select>
          </div>
          <div>
            <label htmlFor="reversavation-total">Reversavation Total: $</label>
            <input type="number" id="reversavation-total"/>
          </div>
        <button className="cancel-confirm-btn" type="submit">Cancel</button>
        <button className="cancel-confirm-btn" type="submit">Confirm</button>
        </form>
      </>
    )
}
*/
import { useState } from "react";

export function ReservationForm({ hotelId, onReserve }) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [guests, setGuests] = useState(1);

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleGuestsChange = (event) => {
        setGuests(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Pass the reservation data to the parent component
        onReserve({
            hotelId,
            startDate,
            endDate,
            guests
        });
        // Clear form inputs
        setStartDate("");
        setEndDate("");
        setGuests(1);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="startDate">Start Date:</label>
                <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={handleStartDateChange}
                />
            </div>
            <div>
                <label htmlFor="endDate">End Date:</label>
                <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={handleEndDateChange}
                />
            </div>
            <div>
                <label htmlFor="guests">Number of Guests:</label>
                <input
                    type="number"
                    id="guests"
                    value={guests}
                    onChange={handleGuestsChange}
                    min="1"
                />
            </div>
            <button type="submit">Reserve</button>
        </form>
    );
}
