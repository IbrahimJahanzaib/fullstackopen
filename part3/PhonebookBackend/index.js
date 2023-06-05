const express = require('express')
const morgan = require('morgan') 
const cors = require('cors')
const Person = require('./models/person')

require('dotenv').config()
const app = express()

morgan.token('body', (req, res) => JSON.stringify(req.body))

app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body'))
app.use(express.json())
app.use(express.static('build'))
app.use(cors())

app.get('/api/persons', (request, response) => {
    Person.find({}).then(result => response.json(result))
})

app.get('/info', (request, response) => {
    const entries = persons.length
    const date = new Date().toString()

    const data = `<p>Phonebook has info of ${entries} people</p><p>${date}</p>`

    response.send(data)
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(result => {response.json(result)})
})

// app.delete('/api/persons/:id', (request, response) => {
//     const id = Number(request.params.id)
//     persons = persons.filter(person => person.id !== id)
  
//     response.status(204).end()
//   })


app.post('/api/persons', (request, response) => {
    const body = request.body

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(result => response.json(result))
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})