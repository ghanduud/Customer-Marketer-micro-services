const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (errors) {
    console.log(errors);
    process.exit(1);
  }
};

module.exports = connectDB;
