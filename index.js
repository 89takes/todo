const express = require('express');
const { createTodo } = require('./types');

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
    const parsedPayload = updatePayload.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        })
        return;
    }

    // update in mongo 
    await todo.update(
        {
            _id: req.body.id
        },
        {
            completed: true
        }
    )

    res.json({
        msg: "Todo marked completed"
    })
}) 

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
})