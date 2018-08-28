const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  //key: {type: Number },
  //title: { type: String},
  note: { type: String },
  //date: { type: Date, default: Date.now },
  // comments: [{
  //   comment: { type: String }, 
  //   time: {type: Date, default: Date.now }, 
  //   username: {type: String}
  // }],

});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
