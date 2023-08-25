//ReservationForm.js
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
        <div className="reservation-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
            <div className="form-group">
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
        </div>
      );
    }      