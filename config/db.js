const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'What_Bytes'

    });
    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error(err.message);
    console.error("MongoDB connection error ❌:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
