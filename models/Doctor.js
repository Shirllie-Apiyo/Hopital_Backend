let mongoose = require("mongoose")
//doctors collection
// fields doc_fname, doc_lname, dob, speciality, salary,years_expe, town, phone, email, address
// post the doctor to mongo
//find all doctors , find all the male doctors, find doctors over 5 years exper
// find doctors who earn over 50k and are gynacologist
let schema = mongoose.Schema(
    {
        doc_fname:{type:String, required:[true, 'Doctors Fname  Required']},

        doc_lname:{type:String, required:[true, 'Doctor Lname Required'] },

        dob:{type:String, required:[true, 'Date of Birth Required'] },

        speciality:{type:String, required:[true, 'Speciality Required']},

        salary:{type:Number, required:[true, 'Salary Required'] },
        
        years_of_experience:{type:String, required:[true, 'Years of experience Required'] },

        town:{type:String, required:[true, 'Town Required'] },

        phone:{type:String, required:[true, 'Phone Number Required'] },

        email:{type:String, required:[true, 'Email Required'] },

        address:{type:String, required:[true, 'Address Required'] },

        gender:{type:String, required:[true, 'Gender Required'] },


    }

)
module.exports = mongoose.model("Doctor", schema)