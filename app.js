let express = require("express")
let mongoose = require("mongoose")
let routes = require("./routes")


//if you use the UseNewUrlParser you specify the port else you dont specify the port
mongoose
    .connect("mongodb://localhost:27017/hospitaldb", {useNewUrlParser: true})

    .then(()=>{
        let app = express()
        //allow express to understand json post
        app.use(express.json())
        app.use("/api", routes) // check routes.js where routes are defined
        app.listen(8080,()=>{
            console.log("Server running at http://127.0.0.1:5000")
        })

    })//end then
    
 // Assignment
 //Create a Booking.js and test in postman
 // phone, email,date, time, doctor_to_see, message     
    

    