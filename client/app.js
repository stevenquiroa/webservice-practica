'use strict'

const io = require('socket.io-client')
const uuid = require('uuid')
const socket = io()
const id = uuid.v4()

const buttons = document.querySelectorAll('button')
const left = document.querySelector('#left')
const right = document.querySelector('#right')

var l = 0, r = 0
var rleft = document.querySelector('#rleft')
var rright = document.querySelector('#rright')

for (var i = buttons.length - 1; i >= 0; i--) {
	buttons[i].addEventListener('click', action)
}

socket.on('autoback', set_ponits)

socket.on('resultback', set_ponits)

function action () {
	const dir = this.id
	const direction = (dir == "left") ? true : false	
	send_points(direction)
}

function send_points(p) {	
	socket.emit('click', {left : p})
}
function set_ponits (message) {
	rleft.innerHTML = message.left
	rright.innerHTML = message.right
}