const controllers = require('./controllers');

module.exports = app => {
  app
    .get('/api/tasks', controllers.viewAllTasks)
    .get('/api/tasks/:id', controllers.viewOneTask)
    .post('/api/tasks', controllers.addTask)
    .put('/api/tasks/:id', controllers.editTask)
    .delete('/api/tasks/:id', controllers.deleteTask);
}
