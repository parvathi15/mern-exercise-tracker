//packages

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //connecting to mongodb database

//environment variables in .env file
require("dotenv").config();

//express server
const app = express();
const port = process.env.PORT || 5000;

//cors middleware for sending and receiving json
app.use(cors());
app.use(express.json());

//connection to mongodb atlas

mongoose.connect("mongodb://127.0.0.1:27017/projects", {
  useNewUrlParser: true
});

// const uri = process.env.ATLAS_URI; //mondodbatlas dashboard database
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }); //flags
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//connection to mongodb atlas

// ****************
//connection to routes
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.use("/data", exercisesRouter);

// ****************

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
