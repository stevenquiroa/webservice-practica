'use strict'

const socketio = require('socket.io')

module.exports = function (server) {
	const io = socketio(server)
	let left = 25
	let right = 25 
	let connections = 0
	io.on('connection', onConnection)

	function onConnection (socket) {
		console.log(`Client connected ${socket.id}`)
		let rleft = left * 2
		let rright = right * 2		

		socket.emit('init', {left: rleft, right: rright, number: connections++})
		socket.broadcast.emit('userconnect', {number: connections++})
		// socket.emit('userconnect', {})

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

		socket.on('disconnect', function () {
			socket.broadcast.emit('userconnect', {number: connections--})
			console.log(`Client disconnected ${socket.id}`)
		})
	}
}