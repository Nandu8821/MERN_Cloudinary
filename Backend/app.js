require("dotenv").config();
const express  = require("express");
const cors = require("cors");
const app = express();
const controller =  require("./controllers/userController");
require("./Database/bdConnect")
const port = 9008;



app.use(express.json());
app.use(cors());


// API
app.post("/register", controller.userController);
app.get("/display",controller.userDisplay)
app.get("/delete:id",controller.userDelete)



app.listen(port ,()=>{
    console.log(`server is running on port ${port}`);
})
