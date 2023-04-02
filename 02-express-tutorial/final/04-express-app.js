const express = require('express') //we could invoke it here by adding () but it is common to invoke it afterwards
const path = require('path')

const app = express()


//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

/* app.get('/', (req, res) => {    
    console.log('User hit the resource')
    res.send('Home page')
})
app.get('/about', (req, res) => {
    res.status(200).send('About page')//usually the correct status will be sent even i we don't specify it
}) 

app.all('*', () => {//used for errors, it work with all http methods //* means any path
    res.status(404).send('<h1> Resource not found </h1>') 
})
 */

// setup static and middleware
app.use(express.static('./public'))//we put in this folder all the static resources //we should probably also use absolute path here
//once you create the folder and put the files in it if you go to localhost:5000/styles.css you will see it

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})
/* app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html')) //we need to provide an absolute path because otherwise it would depend on where you run it
    //we can also use path.join
    //we still need to provide the files that index.html requires
    //this is done above with app.use
     //we can include this index.html file with the static resources and we won't need to send it
    //it becomes the root by default
}) */

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
