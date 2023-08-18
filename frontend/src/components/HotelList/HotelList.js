import { HotelListItem } from "../HotelListItem/HotelListItem";

export function HotelList (){

    // Sample data. This should later be replaced by an API call to get the real dataset
    const hotelData = [
        {
            "id": 1,
            "name": "The Ritz-Carlton",
            "description": "A luxurious hotel with a five-star rating.",
            "ratings": "4.5",
            "amenities": [
                "Spa",
                "Gym",
                "Pool"
            ],
            "location": "Chicago, IL",
            "price_per_night": "500.00",
            "number_of_rooms": 1000
        },
        {
            "id": 3,
            "name": "The Hilton",
            "description": "A luxurious hotel with a five-star rating.",
            "ratings": "4.5",
            "amenities": [
                "Spa",
                "Gym",
                "Pool"
            ],
            "location": "Chicago, IL",
            "price_per_night": "500.00",
            "number_of_rooms": 1500
        },
        {
            "id": 4,
            "name": "The Sky Light",
            "description": "A luxurious hotel with a five-star rating.",
            "ratings": "4.5",
            "amenities": [
                "Spa",
                "Gym",
                "Pool"
            ],
            "location": "Atlanta, GA",
            "price_per_night": "300.00",
            "number_of_rooms": 500
        }
    ]

    return (
        <section id="HotelList">
            {hotelData.map(hotel => <HotelListItem key={hotel.id} hotelObject={hotel}/>)}
        </section>
    )
}

