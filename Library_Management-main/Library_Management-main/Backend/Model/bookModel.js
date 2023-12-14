const mongoose=require("mongoose");
const bookSchema= new mongoose.Schema({
    bookname:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    book_code:{
        type:Number,
    },
    AuthorName:{
        type:String,
        required:true,
    },
    PublisherName:{
        type:String,
        required:true,
    },
    imgurl:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
})

module.exports=mongoose.model("books",bookSchema);