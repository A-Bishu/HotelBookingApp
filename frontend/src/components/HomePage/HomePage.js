import './HomePage.css'

export function HomePage (){
    return (
        <>
            <h2 className="header">Welcome to Hotel Booking</h2>
            <input type="text" id="searchbar" onkeyup="myFunction()" placeholder="Search for hotels.." ></input>
            <button type="submit">Search</button>
        </>
    )
}