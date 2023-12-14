const books = require("../Model/bookModel");

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { bookname, description, AuthorName, PublisherName, imgurl, price } = req.body;

        console.log("ID:", id);
        console.log("Request Body:", req.body);

        const updatedBook = await books.findByIdAndUpdate(
            { _id: id },
            { bookname, description,AuthorName, PublisherName, imgurl, price},
        )
        res.status(200).json({
            success: true,
            message: "Data Updated Successfully",
            updatedBook
        });
    }
     catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            success: false,
            message: "Some error occurred, sorry!"
        });
    }
};
