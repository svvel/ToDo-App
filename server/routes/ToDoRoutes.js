const express = require('express')
const router = express.Router()
const {getToDo, saveTodo, updateTodo, deleteTodo} = require('../controllers/ToDoController')


router.get('/', getToDo)

router.post('/save',saveTodo)
router.post('/update', updateTodo)
router.post('/delete',deleteTodo)


module.exports = router

