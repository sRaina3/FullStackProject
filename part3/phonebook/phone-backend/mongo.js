const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://sraina1:${password}@cluster0.vnxmged.mongodb.net/phonebook?retryWrites=true&w=majority`
mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length<4) {
  console.log("phonebook:")
  Person.find({}).then(result => {
    result.forEach(p => {
      console.log(p.name + " " + p.number)
    })
    mongoose.connection.close()
  })
} else {
  if (process.argv.length !== 5) {
    console.log('incorrect argument count')
    process.exit(1)
  }
  const newPer = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })

  newPer.save().then(result => {
    console.log(`added ${result.name} number ${result.number} to phonebook`)
    mongoose.connection.close()
  })
}