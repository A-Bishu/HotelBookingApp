const express = require('express');

const app = express();

const port = process.env.PORT || 3005;



// test

app.get('/', (req, res) => {
    res.send('Hotel Booking App ');
});



app.listen(port, () => {
    console.log('Server is running on port ${port');
});