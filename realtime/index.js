'use strict'

const socketio = require('socket.io')

module.exports = function (server) {
	const io = socketio(server)
	let left = 25
	let right = 25 
	io.on('connection', onConnection)

	function onConnection (socket) {
		console.log(`Client connected ${socket.id}`)
		
		socket.on('click', function (direction) {
			if (direction.left) {
				left += 1
				right -= 1 
				console.log('click: left')
			}else{
				left -= 1
				right += 1
				console.log('click: right')
			}
			let rleft = left * 2
			let rright = right * 2			
			let message = {left: rleft, right : rright}
			socket.broadcast.emit('resultback', message)
			socket.emit('autoback', message)
		})
	}
}