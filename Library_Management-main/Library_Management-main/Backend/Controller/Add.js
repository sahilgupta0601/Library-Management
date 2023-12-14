const books=require("../Model/bookModel");

exports.add=async(req,res)=>{
    try{
        const inputdata=req.body;
        console.log("name: ", inputdata.name);
        const newbook=await books.create(inputdata);

        res.status(200).json({
            success:true,
            response:newbook,
            message:"Book added successfully"
        })
    }
    catch(error){
        res.status(200).json({
            success:false,
            message:"Error"
        })
        console.log(error);
    }
}