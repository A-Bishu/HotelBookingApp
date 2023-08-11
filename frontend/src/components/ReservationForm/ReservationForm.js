export function ReservationForm (){
    return (
      <>
        <h3>Reservation Form</h3>
        <form action="reservation.php" method="post">
          <div class="elem-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" required/>
          </div>
          <div class="elem-group">
            <label for="email">Your E-mail</label>
            <input type="email" id="email" required/>
          </div>
          <div class="elem-group">
            <label for="phone">Your Phone</label>
            <input type="tel" id="phone" required/>
          </div>
          
          <div>
            <label for="adult">Adults</label>
            <input type="number" id="adult" min="1" required/>
          </div>
          <div>
            <label for="child">Children</label>
            <input type="number" id="child" min="0" required/>
          </div>
          <div>
            <label for="checkin-date">Check-in Date</label>
            <input type="date" id="checkin-date" required/>
          </div>
          <div>
            <label for="checkout-date">Check-out Date</label>
            <input type="date" id="checkout-date" required/>
          </div>
          <div>
            <label for="room-selection">Select room preference</label>
            <select id="room-selection" required>
                <option value="">List of rooms</option>
            </select>
          </div>
        </form>
      </>
    )
}

