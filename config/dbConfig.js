const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    if (!process.env.mongo_url) {
      throw new Error("Mongo_url environment variable not set");
    }

    await mongoose.connect(process.env.mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.error(`Error connecting to database: ${error}`.bgRed);
    process.exit(1); 
  }
};

module.exports = connectDb;