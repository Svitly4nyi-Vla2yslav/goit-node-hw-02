const mongoose = require("mongoose")

const DB_HOST = "mongodb+srv://vladyslav:12345678910@cluster0.be9jlmk.mongodb.net/03-mongodb?retryWrites=true&w=majority"

mongoose.set('strictQuery', true)

mongoose.connect(DB_HOST)
.then(() => {
  app.listen(3000)
})
.catch(error => {
  console.log(error.message)
  process.exit(1)
})

const app = require('./app')


