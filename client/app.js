'use strict'

const io = require('socket.io-client')
const uuid = require('uuid')
const socket = io()
const id = uuid.v4()

const buttons = document.querySelectorAll('.button')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const con = document.querySelector('#connections')

var l = 0, r = 0

for (var i = buttons.length - 1; i >= 0; i--) {
	buttons[i].addEventListener('click', action)
}

socket.on('autoback', set_ponits)

socket.on('resultback', set_ponits)

socket.on('userconnect', set_connections)

function action () {
	const dir = this.id
	const direction = (dir == "left") ? true : false	
	send_points(direction)
}

function send_points(p) {	
	socket.emit('click', {left : p})
}
function set_ponits (message) {
	left.innerHTML = message.left
	right.innerHTML = message.right
	left.style.width = message.left + '%'
	right.style.width = message.right + '%'
}
function set_connections (message) {
	con.innerHTML = message.number
}