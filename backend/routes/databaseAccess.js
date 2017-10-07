const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem.js');
//const bodyParser = require('body-parser');
//router.use(bodyParser.json());

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: req.body.data.task
  });
  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

module.exports = router;
