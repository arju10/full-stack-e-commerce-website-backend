const app = require("./app.js");
const dotenv = require("dotenv");

// Config
dotenv.config({path:"./config/config.env"});

// Connecting to Database
const connectDatabase = require("./config/database");
connectDatabase();




app.listen(process.env.PORT, ()=> {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
} );