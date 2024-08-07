const express = require('express');

const router = express.Router();

const {createTodo, getAllTodos} = require('../controller/todoController')

router.post('/create',createTodo);
router.get('/fetch',getAllTodos)


module.exports = router;