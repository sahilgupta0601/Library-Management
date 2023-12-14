const books = require("../Model/bookModel");

exports.deletebyid = async (req, res) => {
    try {
        const { id } = req.params;

        console.log("Delete Request - ID:", id);

        const deletedBook = await books.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        console.log("Deleted Book:", deletedBook);

        res.status(200).json({
            success: true,
            message: "Deleted Successfully"
        });
    } catch (error) {
        console.error("Delete Request - Error:", error);
        res.status(500).json({
            success: false,
            message: "Error"
        });
    }
};
