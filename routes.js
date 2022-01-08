// npm install express --save
//npm install body parser --save
//npm install cookie-parser --save
//npm install multer --save
const { Router } = require("express")
let express = require("express")
let Booking = require("./models/Booking")
let Doctor = require("./models/Doctor")
let Medicine = require("./models/Medicine")
let Patient = require("./models/Patient")

//create an express Router
let router = express.Router()

router.post("/addpatient", async(req, res)=>
{
    let post =new Patient({
        fname: req.body.fname,
        lname: req.body.lname,
        surname: req.body.surname,
        phone: req.body.phone,
        age: req.body.age,
        residence:req.body.residence,

    })// end the post

    //save to mongo, after post you wait for a result

    try{
        let result  = await post.save()
        res.status(200).json({"msg":"Saved Successfully"})
    }

    catch(error){
        res.status(300).json({"msg":error.message})
    }
})// end route

router.get("/allpatients", function(req, res)
{
    Patient.find(function(error, data)
    {
        if (error){
            res.status(300).json({"msg":error.message})
        }
        else{
            if(data.length ==0){
                res.status(200).json({"msg":"Not Found"})
            }
            else{
            res.status(200).json(data)
            }
        }
    });

});

router.get("/findbyfname", function(req, res)
{
    Patient.find({fname:req.body.fname},
        function(error, data)
    {
        if (error){
            res.status(300).json({"msg":error.message})
        }
        else{
            if(data.length ==0){
                res.status(200).json({"msg":"Not Found"})
            }
            else{
            res.status(200).json(data)
            }
        }
    });

});
router.get("/findbyage", function(req, res)
{
    // Patient.find({age: {$gt: req.body.age}},
    Patient.find({$and: [{age:{$gt: req.body.min}}, {age:{$lt:req.body.max}}, {residence: req.body.residence}]},
        function(error, data)
    {
        if (error){
            res.status(300).json({"msg":error.message})
        }
        else{
            if(data.length ==0){
                res.status(200).json({"msg":"Not Found"})
            }
            else{
            res.status(200).json(data)
            }
        }
    });

});

router.get("/findbyboth", function(req, res)
{
    Patient.find({$and: [{fname:req.body.fname},{lname: req.body.lname}]},
        function(error, data)
    {
        if (error){
            res.status(300).json({"msg":error.message})
        }
        else{
            if(data.length ==0){
                res.status(200).json({"msg":"Not Found"})
            }
            else{
            res.status(200).json(data)
            }
        }
    });

});

router.route('/updatebypatientid').post( function(req, res)
{
    Patient.findByIdAndUpdate({_id:req.body._id},{"fname":req.body.fname,"lname":req.body.lname},
        function(err, result)
    {
        if (err){
            res.send(err)
        }
        
        else{
        res.send({"msg":"updated!"})
        }
        
    })

});

router.route('/deletebyid').post( function(req, res)
{
    Patient.remove({_id:req.body._id},
        function(err, result)
    {
        if (err){
            res.send(err)
        }
        
        else{
        res.send({"msg":"Removed!"})
        }
        
    })

});

router.route('/deletebyname').post( function(req, res)
{
    Patient.remove({fname:req.body.fname},
        function(err, result)
    {
        if (err){
            res.send(err)
        }
        
        else{
        res.send({"msg":"Removed!"})
        }
        
    })

});
//phone, email,date, time, name_of_doctor, message

//fields doc_fname, doc_lname, dob, speciality, salary,years_expe, town, phone, email, address
router.post("/adddoctor", async(req, res)=>
{
    let post =new Doctor({
        doc_fname: req.body.doc_fname,
        doc_lname: req.body.doc_lname,
        dob: req.body.dob,
        speciality: req.body.speciality,
        salary: req.body.salary,
        years_of_experience:req.body.years_of_experience,
        town: req.body.town,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        gender:req.body.gender,


    })// end the post

    //save to mongo, after post you wait for a result

    try{
        let result  = await post.save()
        res.status(200).json({"msg":"Saved Successfully"})
    }

    catch(error){
        res.status(300).json({"msg":error.message})
    }
})// end route

//find by name


//find by name
router.get("/alldoctors", function(req, res)
{
    Doctor.find(function(error, data)
    {
        if (error){
            res.status(300).json({"msg":error.message})
        }
        else{
            if(data.length ==0){
                res.status(200).json({"msg":"Not Found"})
            }
            else{
            res.status(200).json(data)
            }
        }
    });

});

router.get("/findbydocspeciality", function(req, res)
{
   
    Doctor.find({speciality:req.body.speciality},
        function(error, data)
    {
        if (error){
            res.status(300).json({"msg":error.message})
        }
        else{
            if(data.length ==0){
                res.status(200).json({"msg":"Not Found"})
            }
            else{
            res.status(200).json(data)
            }
        }
    });

});

router.get("/findbydocgender", function(req, res)
{
    Doctor.find({gender:req.body.gender},
        function(error, data)
    {
        if (error){
            res.status(300).json({"msg":error.message})
        }
        else{
            if(data.length ==0){
                res.status(200).json({"msg":"Not Found"})
            }
            else{
            res.status(200).json(data)
            }
        }
    });

});
router.route('/updatebydocid').post( function(req, res)
{
    Doctor.findByIdAndUpdate({_id:req.body._id},{"gender":req.body.gender,"town":req.body.town},
        function(err, result)
    {
        if (err){
            res.send(err)
        }
        
        else{
        res.send({"msg":"updated!"})
        }
        
    })

});


router.post("/addbooking", async(req, res)=>
{
    let post =new Booking({
        
        phone: req.body.phone,
        email: req.body.email,
        date: req.body.date,
        time: req.body.time,
        name_of_doctor: req.body.name_of_doctor,
        message: req.body.message,
  

    })// end the post

    //save to mongo, after post you wait for a result

    try{
        let result  = await post.save()
        res.status(200).json({"msg":"Saved Successfully"})
    }

    catch(error){
        res.status(300).json({"msg":error.message})
    }
});// end route

router.get("/allbookings", function(req, res)
{
    Booking.find(function(error, data)
    {
        if (error){
            res.status(300).json({"msg":error.message})
        }
        else{
            if(data.length ==0){
                res.status(200).json({"msg":"Not Found"})
            }
            else{
            res.status(200).json(data)
            }
        }
    });

});



//remove and update


// router.route('/update1').post( function(req, res)
// {
//     Patient.findOneAndUpdate({fname:req.body.fname},{"lname":req.body.lname},
//         function(err, result)
//     {
//         if (err){
//             res.send(err)
//         }
        
//         else{
//         res.send({"msg":"updated!"})
//         }
        
//     })

// });
// router.route('/update2').post( function(req, res)
// {
//     Patient.updateMany({fname:req.body.fname},{"lname":req.body.lname},
//         function(err, result)
//     {
//         if (err){
//             res.send(err)
//         }
        
//         else{
//         res.send({"msg":"updated!"})
//         }
        
//     })

// });



router.post("/addmedicine", async(req, res)=>
{
    let post =new Medicine({
        med_brand: req.body.med_brand,
        supplier: req.body.supplier,
        mfd_date: req.body.mfd_date,
        expi_date: req.body.expi_date,
        cost_per_packet: req.body.cost_per_packet,
        category:req.body.category,

    })// end the post

    //save to mongo, after post you wait for a result

    try{
        let result  = await post.save()
        res.status(200).json({"msg":"Saved Successfully"})
    }

    catch(error){
        res.status(300).json({"msg":error.message})
    }
})// end route
router.get("/allmedicines", function(req, res)
{
    Medicine.find(function(error, data)
    {
        if (error){
            res.status(300).json({"msg":error.message})
        }
        else{
            if(data.length ==0){
                res.status(200).json({"msg":"Not Found"})
            }
            else{
            res.status(200).json(data)
            }
        }
    });

});

router.route('/updatebymedid').post( function(req, res)
{
    Medicine.findByIdAndUpdate({_id:req.body._id},{"category":req.body.category,"med_brand":req.body.med_brand},
        function(err, result)
    {
        if (err){
            res.send(err)
        }
        
        else{
        res.send({"msg":"updated!"})
        }
        
    })

});
router.route('/deletebymedsupplier').post( function(req, res)
{
    Medicine.remove({supplier:req.body.supplier},
        function(err, result)
    {
        if (err){
            res.send(err)
        }
        
        else{
        res.send({"msg":"Removed!"})
        }
        
    })

});


//pending
//Token JWT

//export the router
module.exports = router