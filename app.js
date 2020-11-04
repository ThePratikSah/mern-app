const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const items = require("./routes/api/items");

const app = express();

// body parser middleware

app.use(bodyParser.json());

// mongodb uri
const db = process.env.MONGO_URI;

// connect to mongoDb
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

// use routes
app.use("/api/items/", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Listening on port 5000"));
