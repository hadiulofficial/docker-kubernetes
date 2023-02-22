const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

let userGoal = "Learn Docker"

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <section>
        <h2>My Course Goal</h2>
        <h3>${userGoal}</h3>
      </section>
      <form action="/post" method="POST">
        <div class="form-control">
          <label>Course Goal</label>
          <input type="text" name="goal">
        </div>
        <button>Set Course Goal</button>
      </form>
    </body>
  </html>
    `)
})

app.post('/post', (req, res) => {
    const enteredGoal = req.body.goal
    userGoal = enteredGoal
    console.log(userGoal);
    res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})