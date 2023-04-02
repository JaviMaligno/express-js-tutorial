const express = require('express') 
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    //res.json([{'name': 'john'}, {'name': 'susan'}])  //to send json data
    //res.setHeader('Content-Type','application/json') //not necessary
    //res.json(products)
    res.send('<h1>Home page</h1><a href = "/api/products">products</a>')
})


app.get('/api/products', (req, res) =>{
    const newProducts = products.map((product) => {
        //The commented way is very fancy javascript
        //you can get the particular fields using the brace notation
        //when you return them in braces, it transform the data into json with the correct field name
        //const {id, name, image} = product; //product without description 
        //return {id, name, image}
        return {id : product.id, name : product.name, image: product.image}

    }) 
    res.json(newProducts) 
})

//what if we want to acces one product in particular?
/* app.get('/api/products/1', (req, res) =>{ //we don't really want  to do this for every product
   const singleProduct = products.find((product) => product.id == 1)
   res.json(singleProduct)
}) */

app.get('/api/products/:productID', (req, res) =>{ //now productID is a parameter
    //console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find((product) => product.id == productID) //product.id === Number(productID)
    if(!singleProduct){  //if it is undefined because it doesn't exist
        return res.status(404).send('Product does not exist')    }
    res.json(singleProduct)
 })

//params can get more complicated
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('Hello world')
})

//https://hn.algolia.com/api this explains with an example how to do cool searches, sort and stuff
//this uses queries

app.get('/api/v1/query', (req, res) => {//type http://localhost:5000/api/v1/query?name=john&id=4
    //query contains {name: 'john', id: '4'}
    //console.log(req.query)
    //res.send('Hello world')
    const {search, limit} = req.query
    //let sortedProducts  = [...products] // three dots in this case is spread https://oprearocks.medium.com/what-do-the-three-dots-mean-in-javascript-bc5749439c9a https://www.codingem.com/javascript-three-dots/
    let sortedProducts  = products
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return  product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        //return res.status(200).send('No products matched')
       return res.status(200).json({success:true,data:[]}) //return to avoid sending two responses (would cause error)
    }
    res.status(200).json(sortedProducts) //it gives all the products if the search is not done well (if there is nor search or limit)
//http://localhost:5000/api/v1/query?search=a&limit=4
//just typing http://localhost:5000/api/v1/query gives you the query
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})