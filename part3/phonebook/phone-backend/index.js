const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.static('build'))

morgan.token('body', function(req, res) {
  if (req.method === 'POST') {
  return JSON.stringify(req.body);
  }
});

let nums = [
  { 
    id: 1,
    name: "Arto Hellas", 
    number: "040-123456"
  },
  { 
    id: 2,
    name: "Ada Lovelace", 
    number: "39-44-5323523"
  },
  { 
    id: 3,
    name: "Dan Abramov", 
    number: "12-43-234345"
  },
  { 
    id: 4,
    name: "Mary Poppendieck", 
    number: "39-23-6423122"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Server is Functioning!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.send(nums)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const correct = nums.find(nums => nums.id === id)
  if (correct) {
    response.send(correct)
  } else {
    response.status(404).end()
  }
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
  const newId = Math.floor(Math.random() * 10000000)
  if (!request.body.number || !request.body.name) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    })
  } else if (nums.find(elem => elem.name === request.body.name)) {
    return response.status(400).json({ 
      error: 'number already present' 
    })
  }
  const newNum = {
    id: newId,
    name: request.body.name,
    number: request.body.number
  }
  nums = nums.concat(newNum)
  response.send(newNum)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})