const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  await mongoose.connect(process.env.mongo);
  console.log("Mongodb is up and running");
};

module.exports = { connect };
