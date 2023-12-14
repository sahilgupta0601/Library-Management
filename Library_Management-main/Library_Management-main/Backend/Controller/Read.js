const books=require("../Model/bookModel");

exports.read=async(req,res)=>{
    try{
        const {id}=req.params;
        const data=await books.findById(id);
        res.status(200).json({
            success:true,
            response:data,
            meesage:"Fond the user successfully"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Connot get the id",
            response:error,
        })
    }
}

exports.readall=async(req,res)=>{
    try{
        // const data=req.body;
        const inputdata=await books.find();
        res.status(200).json({
            success:true,
            response:inputdata,
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Connot get the id",
            response:error,
        })
    }
}