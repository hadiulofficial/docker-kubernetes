const express = require('express')
const app = express()
const port = 8000

app.use(express.urlencoded({ extended: true }))

let userGoal = "Learn Docker"

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})