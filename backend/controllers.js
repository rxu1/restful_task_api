const Task = require('./models');

module.exports = {
  viewAllTasks: (req, res) => {
    Task.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  viewOneTask: (req, res) => {
    Task.find({_id: req.params.id})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  addTask: (req, res) => {
    Task.create({title: req.body.title, description: req.body.description, completed: req.body.completed})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  editTask: (req, res) => {
    const DATA = req.body;
    const ID = req.params.id;
    Task.findOneAndUpdate({_id: ID}, DATA, { runValidators: true })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  deleteTask: (req, res) => {
    const ID = req.params.id;
    Task.findOneAndDelete({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}
