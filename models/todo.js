const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: String,
});

module.exports = mongoose.model('Todo', TodoSchema);
