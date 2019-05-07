let mongoose = require('mongoose');


let TodoSchema = new mongoose.Schema({
  name: String,
  text: String,
  done: Boolean,
});

module.exports = mongoose.model('Todo', TodoSchema);