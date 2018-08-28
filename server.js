const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/notes");

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
//var url = 'mongodb://localhost:27017/notes';

// Use connect method to connect to the server
MongoClient.connect("mongodb://localhost:27017/notes", { useNewUrlParser: true }, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to MongoDB server");

 // db.close();
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
