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


// MongoDB
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/notes';

// Connect to MongoDB
MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  //Create MongoDB collection - "ReduxNotepadDB"
  var dbo = db.db("ReduxNotepadDB");
  

  // Create MongoDB table - "notes" 
  dbo.createCollection("notes", function(err, res) {
    if (err) throw err;
    if (res) {
      console.log("MongoDB: Notes (table/collection) Created in ReduxNotepadDB (database)!");
      // Insert seed data if MongoDB db creation successful
      dbo.collection('notes').insertMany(
      [
        {"title": "A title", "note": "A long note."},
        {"title": "A different title", "note": "A short note."}
      ])
    }
  })
});



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
