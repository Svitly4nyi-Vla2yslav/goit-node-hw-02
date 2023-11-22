const mongoose = require("mongoose")
const app = require('./app')
const {DB_HOST} = process.env;

mongoose.set('strictQuery', true)
console.log(`Connecting to MongoDB at: ${DB_HOST}`);
mongoose.connect(DB_HOST)
.then(() => {
  app.listen(3000)
})
.catch(error => {
  console.log(error.message)
  process.exit(1)
})




