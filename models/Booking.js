let mongoose = require("mongoose")
//phone, email,date, time, name_of_doctor, message
let schema = mongoose.Schema(
    {
        phone:{type:String, required:[true, 'Phone Number Required']},

        email:{type:String, required:[true, 'Email Required'] },

        date:{type:Date, required:[true, 'Date Required'] },

        time:{type:String, required:[true, 'Time Required']},

        name_of_doctor:{type:String, required:[true, 'Doctor Required'] },
        
        message:{type:String, required:[true, 'Message Required'] },

    }

)

module.exports = mongoose.model("Booking", schema)

//bookings find
//doctors collection
// fields doc_fname, doc_lname, dob, speciality, salary,years_expe, town, phone, email, address
// post the doctor to mongo
//find all doctors , find all the male doctors, find doctors over 5 years exper
// find doctors who earn over 50k and are gynacologist