//define variable
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyparser = require('body-parser')
const accountLogin = require('./account_login.js')
const port = 3000

//set view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//body parser setting
app.use(bodyparser.urlencoded({ extended: true }))

//route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const loginData = req.body
  const nextPage = accountLogin(loginData)
  res.render('nextpage', { loginData: loginData, nextPage: nextPage })
})

//liston on 
app.listen(port, () => {
  console.log(`web app is listen on localhost:${port}`)
})