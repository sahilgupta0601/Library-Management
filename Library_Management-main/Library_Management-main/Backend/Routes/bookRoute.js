const express=require("express");

const router=express.Router();

const {add}=require("../Controller/Add");
const {read}=require("../Controller/Read");
const {readall}=require("../Controller/Read");
const {update}=require("../Controller/Update");
const {deletebyid}=require("../Controller/Delete");

router.post("/add",add);
router.get("/get/:id",read);
router.get("/get",readall);

router.patch("/update/:id",update);

router.delete("/delete/:id",deletebyid);

// app.use("",router);
module.exports=router;
