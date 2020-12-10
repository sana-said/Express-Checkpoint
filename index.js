const express = require("express")
const app = express()
const path = require('path')

//Middlewear cheking web cite's availability 

function horraire(req, res, next) {
  let date = new Date();
  let day = date.getDay()
  let hour = date.getHours()
  if ((day >= 1 && day < 6) && (hour >= 9 && hour <= 17)) {
    next()
    console.log('next')

  }
  else {
    res.send('<h1>The web application is only available in working time (Monday to Friday,  from 9 to 17) </h1>')
  }

}

app.use(horraire)
// middlewear (Express Static : Routing)
app.use(express.static(path.join(__dirname, 'public')))


// server is listening on port 5000
app.listen(5000, err => {
  if (err) { throw err }
  else { console.log("SERVER IS RUNNING...") }
})