import './HomePage.css'
import HotelDropdown from '../DropdownList/DropdownList'

function myFunction() {}

export function HomePage (){
    return (
        <>
            <div className='background'>
                <h2 className="title">Welcome to Hotel Booking</h2>
                <HotelDropdown />
                
                {/* Commenting out this search function to try out the dropdown menu */}
                {/* <input type="text" id="searchbar" onKeyUp={myFunction} placeholder="Search for hotels.." ></input>
                <button type="submit">Search</button> */}
            </div>
        </>
    )
}