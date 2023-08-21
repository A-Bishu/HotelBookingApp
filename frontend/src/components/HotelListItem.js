export function HotelListItem({hotelObject}) {

    return(
        <article className="HotelListItem-article">
            <h2>{hotelObject.name}</h2>
            <h3>{hotelObject.description}</h3>
            <h4>Rated {hotelObject.ratings} out of 5.0</h4>
            <p>Located in {hotelObject.location}</p>
            <p>${hotelObject.price_per_night} per night</p>
            <p>{hotelObject.number_of_rooms} rooms available</p>
        </article>
    );
}