const controllers = require('./controllers');
module.exports = function(app) {
  app
    .get('/', controllers.viewAllTasks)
    .get('/task/:id', controllers.viewOneTask)
    .post('/task/new', controllers.addTask)
    .put('/task/edit/:id', controllers.editTask)
    .delete('/task/delete/:id', controllers.deleteTask)
}
