let express = require('express')
let bp = require('body-parser')


let server = express()
let port = 3030


//middlewear
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


//routes
let dogRoutes = require('./server-assets/routes/dog-routes')
let wolfRoutes = require('./server-assets/routes/wolf-routes')

server.use('/api/wolfs', wolfRoutes)
server.use('/api/dogs', dogRoutes)


//catchall
server.use('', (req, res, next) => {
  res.status(400).send('No Matching Routes')
})

server.listen(port, () => {
  console.log('server is running on port' + port)
})