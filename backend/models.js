const mongoose = require('mongoose');
const connectString = 'mongodb://localhost/tasks';
mongoose.connect(connectString, {useNewUrlParser:true});

const TaskSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String, 
    default: ''
  },
  completed: {
    type: Boolean, 
    default: false
  },
}, {timestamps:true});

module.exports = mongoose.model('Task', TaskSchema);
