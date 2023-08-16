export function ReservationForm (){
    return (
      <>
        <h3>Reservation Form</h3>
        <form className="reservation-form" action="reservation.php" method="post">
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required/>
          </div>
          <div>
            <label htmlFor="email">Your E-mail</label>
            <input type="email" id="email" required/>
          </div>
          <div>
            <label htmlFor="phone">Your Phone</label>
            <input type="tel" id="phone" required/>
          </div>
          
          <div>
            <label htmlFor="adult">Adults</label>
            <input type="number" id="adult" min="1" required/>
          </div>
          <div>
            <label htmlFor="child">Children</label>
            <input type="number" id="child" min="0" required/>
          </div>
          <div>
            <label htmlFor="checkin-date">Check-in Date</label>
            <input type="date" id="checkin-date" required/>
          </div>
          <div>
            <label htmlFor="checkout-date">Check-out Date</label>
            <input type="date" id="checkout-date" required/>
          </div>
          <div>
            <label htmlFor="room-selection">Select room preference</label>
            <select id="room-selection" required>
                <option value="">List of rooms</option>
            </select>
          </div>
          <div>
            <label htmlFor="reversavation-total">Reversavation Total: $</label>
            <input type="number" id="reversavation-total"/>
          </div>
        <button className="cancel-confirm-btn" type="submit">Cancel</button>
        <button className="cancel-confirm-btn" type="submit">Confirm</button>
        </form>
      </>
    )
}

