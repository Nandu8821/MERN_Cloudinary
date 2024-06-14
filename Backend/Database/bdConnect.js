const mongoose = require ("mongoose");

// const DB = process.env.DATABASE;


mongoose.connect("mongodb://127.0.0.1:27017/clouduser",{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Database Connected");
}).catch(()=>{
    console.log("Database Not Connected");
})