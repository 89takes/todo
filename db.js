const mongoose = require('mongoose')
// keep this in .env file for prod apps
mongoose.connect("mongodb+srv://divijguetta1991:<password>@cluster0.0svlnwu.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}