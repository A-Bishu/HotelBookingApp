const express = require('express');
const hotelsRoute = require('./routes/HotelsRoutes');



const app = express();
const port = process.env.PORT || 3005;









// test
app.get('/', (req, res) => {
    res.send('Hotel Booking App ');
});

//Use the hotel route
app.use('/hotels', hotelsRoute);





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});