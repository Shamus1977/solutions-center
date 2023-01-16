const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const {errorHandler} = require("./middleware/errorMiddleware");
const colors = require("colors");
const connectDB = require("./config/db");

//Connect to database
connectDB();

const app = express();

//Set up ability to use x-www-form-urlencoded
// Allows to grab info from forms directly
//via the parsing of body.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.status(200).json({message:"Hello from Solutions Center"});
});

//Routes
const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listenting on PORT: ${PORT}`));