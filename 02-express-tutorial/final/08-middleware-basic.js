const express = require('express')
const app = express()

//  req => middleware => res

//we use this function to avoid writing this functionality for every url
const logger = (req, res, next) => {//in a middleware we always need to use next unless we are terminating the process by sending a response, otherwise the page won't finish loading
  //next pass it on to the next middleware, iin our case, our app.get
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
  //res.send('Testing') in this case we can omit next()
}

app.get('/', logger, (req, res) => {//we can stack a middlewere between url  and callback
  //express knows that it has to pass the arguments
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
