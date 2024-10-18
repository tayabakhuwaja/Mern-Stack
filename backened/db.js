// db.js
const mongoose = require('mongoose');

const mongouri = "mongodb://tayabakhuwaja14:tabu@db-shard-00-00.a5lvw.mongodb.net:27017,db-shard-00-01.a5lvw.mongodb.net:27017,db-shard-00-02.a5lvw.mongodb.net:27017/?ssl=true&replicaSet=atlas-f7ub10-shard-0&authSource=admin&retryWrites=true&w=majority&appName=db";

const connection = async () => {
  try {
    await mongoose.connect(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Recommended to include for newer versions
    });
    console.log("MongoDB connected successfully");

    // Test querying after successful connection
    const fetch = mongoose.connection.db.collection("items");
    const data = await fetch.find({}).toArray();
    global.food_items =  data;
    console.log(global.food_items);
    
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = connection;
