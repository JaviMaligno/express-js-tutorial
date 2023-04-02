const authorize = (req, res, next) => {
    const {user} = req.query
    if(user == 'john'){//you will only get the content if you provide query?user=john
        //you can also type the urle followed by ?user=john, like /api/items?user=john
        req.user = {name:'john', id:3}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
    //console.log('Authorize')
    //next()
}

module.exports = authorize