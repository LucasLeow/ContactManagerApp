const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require('./config/dbConnection');
const dotenv = require("dotenv").config(); // utilize dotenv to manipulate .env file (typically given in prod projects)

connectDb();
const app = express();
const port = process.env.port;

// provides parser to parse json from data stream
app.use(express.json()) //Express built-in middleware to parse json requests

app.use('/api/contacts', require("./routes/contactRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server running on Port ${port}`);
})
