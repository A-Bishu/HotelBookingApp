
//server.js
const express = require('express');
const {sequelize, testConnection} = require('./models/dbConn');
const HotelRouter = require('./routes/HotelsRoutes');

require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 3005;

app.use(express.json());

testConnection();


app.use('/hotels', HotelRouter);


app.get('/', (req,res) => {
    res.send('This should return all the items')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});


