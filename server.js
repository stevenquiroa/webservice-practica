'use strict'

const http = require('http')
const router = require('./router')

const fs = require('fs')
const path = require('path')
const port = process.env.PORT || 8080

const server = http.createServer()

server.on('request', router)
server.on('listening', onListening)

server.listen(port)

function onListening () {
	console.log(`Server running in port ` + port)
}