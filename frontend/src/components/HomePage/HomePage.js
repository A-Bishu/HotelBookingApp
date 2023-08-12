import './HomePage.css'

export function HomePage (){
    return (
        <>
            <h2>Welcome to Hotel Booking</h2>

            <h3>List of Hotels</h3>
            <input type="text" id="searchbar" onkeyup="myFunction()" placeholder="Search for hotels.." ></input>
        </>
    )
}