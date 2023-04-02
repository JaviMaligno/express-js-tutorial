// console.log('Express Tutorial')
//npm install and npm start to install dependencies and run the start script
const http = require('http')
const { readFileSync } = require('fs')

// get all files

// const homePage = readFileSync('./index.html') 
//we're just requesting the file once, so we don't need to use the async version
const homePage = readFileSync('./navbar-app/index.html')//this file won't work perfectly because it requires other files that shouldd be on other urls (every href)
//we should have to manually request all files
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })//status code, content-type, https://developer.mozilla.org/es/docs/Web/HTTP/Headers
    //if you change html to plain, it will prompt the plain text https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    //you can change the status code arbitrarily and it  will show in developer settings
    res.write(homePage)
    res.end()//you can also write inside end
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  // image/logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
