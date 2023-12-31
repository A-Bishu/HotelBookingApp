// server.js
const express = require("express");
const { sequelize, testConnection } = require("./models/dbConn");
const HotelRouter = require("./routes/HotelsRoutes");
const ReservationsRouter = require("./routes/ReservationsRoutes"); 
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT || 3005;

app.use(express.json());

testConnection();

app.use(cors({ origin: "http://localhost:3000" }));

app.use("/hotels", HotelRouter);
app.use("/reservations", ReservationsRouter); 

app.get("/", (req, res) => {
  res.send("This should return all the items");
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});



