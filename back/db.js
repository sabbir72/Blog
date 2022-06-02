const mongoose = require("mongoose");

const conntectDatabase = () => {
  const connnectionURL = process.env.MONGO_URL
  mongoose.connect(connnectionURL, {
    useNewUrlParser: true, useUnifiedTopology: true, 
  });
  console.log("MongoDB Connected...");
};

module.exports = conntectDatabase;
