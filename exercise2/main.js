'use strict';

//TODO: Import tweeterMock module
var tweeterEmitter = require('./tweeterMock.js');

var tweeterListener = function (message) {
	//return () => {
		//TODO add a setTimeout to show new tweets afte 3 seconds
        setTimeout(() => {
  		    console.log('New Tweet recevied from ' + message.nickname + ': ' + message.tweet);
        },3000);
	//}
}

var nickname = process.argv[2];
var tweet = process.argv[3];
if(!nickname && !tweet) {
	console.log("Usage: ");
	console.log("$> node main.js @peter hello");
	process.exit();
}

// TODO add a listener that listens 'tweetSent' Event from tweeterEmitter
tweeterEmitter.on('tweetSent', tweeterListener);
tweeterEmitter.sendTweet(nickname, tweet);
