import { ReservationListItem } from "./ReservationListItem";

export function ReservationList({ reservations }) {
    return (
        <section id="ReservationList">
            {reservations.map(reservation => (
                <ReservationListItem reservationObject={reservation} />
            ))}
        </section>
    );
}