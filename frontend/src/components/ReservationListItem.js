export function ReservationListItem({ reservationObject }) {
    return (
        <div className="reservation">
            <h2>Reservation for Hotel {reservationObject.hotel_id}</h2>
            <p>Guest {reservationObject.guestName}</p>
            <p>Check in: {reservationObject.checkInDate}</p>
            <p>Check out: {reservationObject.checkOutDate}</p>
        </div>
    );
}