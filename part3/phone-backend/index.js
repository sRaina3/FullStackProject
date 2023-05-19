const express = require('express')
const app = express()

app.use(express.json())

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


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})