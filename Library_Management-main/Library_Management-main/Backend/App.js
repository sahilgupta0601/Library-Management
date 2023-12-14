const express=require("express");
const app=express();

const cors=require("cors");

app.use(express.json());
app.use(cors());
require("./Middleware/Database");

const routes=require("./Routes/bookRoute");
app.use(routes);

// mongoose();
app.listen(1000,()=>{
    console.log("Server Started");
})