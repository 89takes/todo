const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db')

const app = express()
app.use(express.json());

// body {
//     title: string,
//     description: string
// }

app.post('/todo', async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        })
        return;
    }

    // put in mongo
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get('/todos', async function(req, res) {
    const todos = await todo.find();
    res.json({
        todos
    })
})

app.put('/completed', async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        })
        return;
    }

    // update in mongo 
    await todo.findByIdAndUpdate(
        {
            _id: req.body.id
        },
        {
            completed: true
        },
        {
            new: true
        }
    )

    res.json({
        msg: "Todo marked completed"
    })
}) 

app.listen(3000)