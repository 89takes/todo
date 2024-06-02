const express = require('express')

const app = express()

app.get('/todos', function(req, res) {

})

// body {
//     title: string,
//     description: string
// }

app.post('/todo', function(req, res) {

})

app.put('/completed', function(req, res) {

}) 

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
})