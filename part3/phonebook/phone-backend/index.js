require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.static('build'))

morgan.token('body', function(req, res) {
  if (req.method === 'POST') {
  return JSON.stringify(req.body);
  }
});

app.get('/', (request, response) => {
  response.send('<h1>Server is Functioning!</h1>')
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(people => { 
    response.json(people)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(num => {
      if (num) {
        response.json(num)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.get('/info', (request, response) => {
  const start = new Date().toLocaleString()
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  Person.find({}).then(people => {
    response.send(
      `
      <p>Phonebook has info for ${people.length} people</p>
      <p> ${start} ${timeZone}</p>
      `
  )
  })
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response) => {
  const newNum = new Person ({
    name: request.body.name,
    number: request.body.number 
  })
  newNum.save().then(p => {
    response.json(p)
  })
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const newP = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, newP, { new: true, runValidators: true, context: 'query'})
    .then(oldNum => {
      response.json(oldNum)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})