const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo, getspecificTodo } = require('../controller/todoController');


const router = express.Router();


router.get('/', getTodos)

router.get('/:id', getspecificTodo)

router.post('/add', createTodo)

router.put('/update/:id',updateTodo)

router.delete('/delete/:id', deleteTodo)

module.exports = router;