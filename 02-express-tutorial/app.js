const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')

app.use(express.json())

//we need to set the base route, wich is /api/people and where to take the methods from, which is people (defined above)
app.use('/api/people', people) //we need to remove the url from the people.js in oorder for this to work
app.use('/login', auth)


app.listen(5000, () => {
    console.log('Server is listening on por 5000...')
})