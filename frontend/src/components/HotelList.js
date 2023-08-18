import { HotelListItem } from "./HotelListItem";

export function HotelList ({hotels}){

   

    return (
        <section id="HotelList">
            {hotels.map(hotel => ( 
            <HotelListItem key={hotels.id} hotelObject={hotel} />))}
        </section>
    )
}

