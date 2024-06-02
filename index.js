const express = require('express');
const { createTodo } = require('./types');

const app = express()

app.get('/todos', function(req, res) {

})

// body {
//     title: string,
//     description: string
// }

app.post('/todo', function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        })
        return;
    }

    // put in mongo

})

app.put('/completed', function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updatePayload.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        })
        return;
    }

    // update in mongo 
}) 

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
})