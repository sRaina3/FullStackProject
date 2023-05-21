require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const Person = require('./models/person')

const app = express()

app.use(express.json())
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

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(p => {
    response.json(p)
  })
})

app.get('/info', (request, response) => {
  const start = new Date().toLocaleString()
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  response.send(
      `
      <p>Phonebook has info for ${nums.length} people</p>
      <p> ${start} ${timeZone}</p>
      `
  )
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  nums = nums.filter(elem => elem.id !== id)
  response.status(204).end()
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


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})