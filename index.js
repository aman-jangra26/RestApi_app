const express = require('express');
const app = express();

const dotenv = require('dotenv')
dotenv.config();
 
const connectDB= require("./config/db")
connectDB()

const PORT = process.env.PORT||5000;
app.use(express.json());


const userRoutes = require('./routes/userRoutes')
 
app.use('/api/user',userRoutes);
 
app.listen(PORT,
    function (err) {
        if (err) console.log(err);
        console.log("Server listening on PORT", PORT);
});