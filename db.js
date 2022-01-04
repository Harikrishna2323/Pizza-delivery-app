const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(`${process.env.URL}`, {
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.on("connected", () => {
  console.log("DB connected Successfully.");
});
db.on("error", () => {
  console.log("DB connection failed.");
});

module.exports = mongoose;
