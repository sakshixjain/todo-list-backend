const express= require("express");
const cors= require("cors");
const app= express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

// middleWare to parse json request body
app.use(express.json());

// import routes for todo api 

const todoRoutes= require("./routes/todos");
//mount the todo aspi routes

app.use(cors({
    origin: '*', // Allow only this origin
    methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization', // Allowed headers
    credentials: true, // Allow cookies (if needed)
}));

app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`);
})

//connect to the database

const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (req,res)=>{
    res.send(`<h1> this is homepage baby </h1>`)
})