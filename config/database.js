const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect= ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/myFistDatabase', {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("DB ka connection is successfull"))
    .catch((error)=>{
        console.log("issue in db connection ");
        console.error(error.message);
        //meaining
        process.exit(1);

    });
}

module.exports= dbConnect;