const express = require('express')
const app = express()

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
console.log(`Server is listening on PORT: ${PORT}`)
})