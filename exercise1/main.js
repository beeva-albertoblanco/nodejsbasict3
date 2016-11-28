'use strict';

const eventEmitter = require('events');

const myEventEmitter = new eventEmitter();

function listener() {
	console.log('Coming...');
}

function shout() {
    console.log('I SAY I AM COMING');
}

// TODO Write an interval that emits every second 'ringbell' event with 'ring ring' tone as parameter

var interval = setInterval(() => {
	myEventEmitter.emit('ringbell', 'ring ring');
}, 1000);

// TODO add an event listener with .on() method that listens 'ringbell' event and prints given tone
myEventEmitter.on('ringbell', (tone) => {
    console.log(tone);
});

//TODO: dd an event listener with .on() method that listens 'ringbell' event and calls listener method

myEventEmitter.on('ringbell', (tone) => {
    listener();
});

// Timeout to end events emision and finally answer the door
setTimeout(() => {
    clearInterval(interval);
    shout();
}, 4000);
