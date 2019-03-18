const Task = require('./models');

module.exports = {

  viewAllTasks: (req, res) => {
    Task.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  viewOneTask: (req, res) => {
    const ID = req.params.id;
    Task.find({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  
  createTask: (req, res) => {
    const formData = req.body;
    Task.create(formData)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  addTask: (req, res) => {
    const { title, description, completed } = req.body;
    Task.create({title:title, description:description, completed:completed})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  editTask: (req, res) => {
    const DATA = req.body;
    const ID = req.params.id;
    Task.findOneAndUpdate({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  deleteTask: (req, res) => {
    const ID = req.params.id;
    Task.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
  
}
