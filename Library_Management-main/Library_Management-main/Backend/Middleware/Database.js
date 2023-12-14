// Import the mongoose library
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Library", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });