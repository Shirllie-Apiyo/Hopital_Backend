// we use mongoose (npm install mongoose)
let mongoose = require("mongoose")

let schema = mongoose.Schema(
    {
        fname:{type:String, required:[true, 'First Name Required'],maxlength:[10,'Maximum length is 10'] },

        lname:{type:String, required:[true, 'Last Name Required'],maxlength:[10,'Maximum length is 10'] },

        surname:{type:String, required:[true, 'Sur Name Required'],maxlength:[10,'Maximum length is 10'] },

        phone:{type:String, required:[true, 'Phone Number Required'],minlength:[10,'Minimum length is 10'] },

        age:{type:Number, required:[true, 'Age Name Required']},

        residence:{type:String, required:[true, 'Residence Required']},


    }
)

// we export to make it available to make it availabale globally
module.exports = mongoose.model("Patient", schema)