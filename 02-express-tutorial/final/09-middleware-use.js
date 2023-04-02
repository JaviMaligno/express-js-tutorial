const express = require('express')
const app = express()
const logger = require('./logger') //we have written the function in a separate file
const authorize = require('./authorize')
//  req => middleware => res
app.use([logger, authorize]) //allows to use logger for every route, array to use several middleware functions (they will be executed in order)
// app.use needs to be stated first, or it won't work for the routes written before

//to be applied to specific route (and subroutes) app.use('/api', logger)
// to it would apply e.g. to api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
