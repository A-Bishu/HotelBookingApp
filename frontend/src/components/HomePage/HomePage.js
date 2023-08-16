import './HomePage.css'

function myFunction() {}

export function HomePage (){
    return (
        <>
            <div className='background'>
                <h2 className="title">Welcome to Hotel Booking</h2>
                <input type="text" id="searchbar" onKeyUp={myFunction} placeholder="Search for hotels.." ></input>
                <button type="submit">Search</button>
            </div>
        </>
    )
}