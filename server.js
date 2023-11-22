const mongoose = require("mongoose")
const app = require('./app')
const {DB_HOST, PORT = 3000} = process.env;

mongoose.set('strictQuery', true)

// console.log(`Connecting to MongoDB at: ${DB_HOST}`);

mongoose.connect(DB_HOST)

.then(() => {
  app.listen(PORT)
})
.catch(error => {
  console.log(error.message)
  process.exit(1)
})




