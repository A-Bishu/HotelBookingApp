const DropTables = require("../db/DropTables");
const Createtables = require("../db/Createtables");
const PopulateTables = require("../db/PopulateTables");




DropTables()
    .then(() => Createtables())
    .then(() => PopulateTables());


