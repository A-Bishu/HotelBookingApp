/*
import { HotelListItem } from "./HotelListItem";

export function HotelList ({hotels}){

   

    return (
        <section id="HotelList">
            {hotels.map(hotel => ( 
            <HotelListItem key={hotels.id} hotelObject={hotel} />))}
        </section>
    )
}
*/

import { useState } from "react";
import { HotelListItem } from "./HotelListItem";

export function HotelList({ hotels }) {
    const [selectedLocation, setSelectedLocation] = useState("All");

    const handleLocationChange = event => {
        setSelectedLocation(event.target.value);
    };

    const filteredHotels = selectedLocation === "All"
        ? hotels
        : hotels.filter(hotel => hotel.location === selectedLocation);

    const locationOptions = ["All", ...new Set(hotels.map(hotel => hotel.location))];

    return (
        <section id="HotelList">
            <div>
                <label htmlFor="locationFilter">Filter by Location: </label>
                <select id="locationFilter" value={selectedLocation} onChange={handleLocationChange}>
                    {locationOptions.map((location, index) => (
                        <option key={index} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>
            {filteredHotels.map(hotel => (
                <HotelListItem key={hotel.id} hotelObject={hotel} />
            ))}
        </section>
    );
}
