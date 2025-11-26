const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true, trim: true, minlength: 1, maxlength: 300 },
  done: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true }
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);
