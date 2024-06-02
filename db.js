const mongoose = require('mongoose')
// keep this in .env file for prod apps
//MKUwgubrk59nXxv6
mongoose.connect("mongodb+srv://divijadmin:MKUwgubrk59nXxv6@cluster0.0svlnwu.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
todoSchema.index({ title: 1 });
const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}