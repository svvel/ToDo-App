const TodoModel = require('../modules/ToDoModule')

module.exports.getToDo = async (req,res)=>{
    const toDo = await TodoModel.find()
    res.send(toDo)
}

module.exports.saveTodo = async (req,res)=>{
    const { text } = req.body
    console.log(text);
    const toDo = await TodoModel
        .create({text})
        .then(()=>{
            res.send('Data saved..')
        })
    res.send(toDo)
}

module.exports.updateTodo = async (req,res)=>{
    const {_id, text } = req.body
    TodoModel
        .findByIdAndUpdate(_id, {text})
        .then(()=>{
            res.send('update succes..')
        })
}

module.exports.deleteTodo = async (req,res)=>{
    const {_id}= req.body
    TodoModel
        .findOneAndDelete(_id)
        .then(()=>{
            res.send('deleted successfully..')
        })
}