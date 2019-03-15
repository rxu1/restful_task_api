const mongoose = require('mongoose'),
  connect = 'mongodb://localhost/tasks';
mongoose.connect(connect, {useNewUrlParser: true});

const TaskSchema = new mongoose.Schema({
  title: {type: String},
  description: {type: String, default: ''},
  completed: {type: Boolean, default: false},
}, {timestamps: true});

module.exports = mongoose.model('Task', TaskSchema);
