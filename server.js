require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.use('/', routes)

mongoose.connect(process.env.MONGODB_URI)

// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//   console.log(`Server is listening on PORT: ${PORT}`)
// })

app.listen(process.env.PORT || 3001, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
 });
