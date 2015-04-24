'use strict'

const buttons = document.querySelectorAll('button')
const left = document.querySelector('#left')
const right = document.querySelector('#right')

// console.log(buttons)
buttons.forEach(function(b){
	console.log(b)
	b.addEventListener('click', action)
})

function action () {
	const dir = this.id
	console.log(dir)
}
