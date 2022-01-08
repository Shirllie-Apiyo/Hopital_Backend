let mongoose = require("mongoose")
//medicine
//id, med brand(z,y), supplier, manufactiring date, expi_date,, cost per packet, category(antibiotic, painkiller)
//add,find, update, delete
//find painkiller, by
let schema = mongoose.Schema(

    {
        med_brand:{type:String, required:[true, 'Medicine Brand Required']},

        supplier:{type:String, required:[true, 'Supplier Required']},

        mfd_date:{type:String, required:[true, 'Manufacturing Date Required']},

        expi_date:{type:String, required:[true, 'Expiring Date Required']},

        cost_per_packet:{type:Number, required:[true, 'Cost Required']},

        category:{type:String, required:[true, 'Category Required']},

    }
)

module.exports = mongoose.model("Medicine", schema)