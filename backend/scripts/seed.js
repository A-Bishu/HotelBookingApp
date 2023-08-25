const DropTables = require("../db/DropTables");
const Createtables = require("../db/Createtables");
const CreateReservationTable = require("../db/CreateReservationsTable");
const PopulateTables = require("../db/PopulateTables");
const PopulateReservationsTable = require("../db/PopulateReservationsTable");




DropTables()
    .then(() => Createtables())
    .then(() => PopulateTables())
    .then(() => CreateReservationTable())
    .then(() => PopulateReservationsTable())
    .catch((error) => {
        console.error("Error while setting up the database:", error);
    });
    
    



