import Player from '@vimeo/player'
// var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');
// const iframePlayer = new Vimeo.Player(iframe);
// тестова частина:   
console.log(player);
player.on('play', function () {
        console.log('played the video!');
    });

    //функціональна частина: 
player.on('timeupdate', _.throttle (function(data) {

     localStorage.setItem("videoplayer-current-time", data.seconds); }, 1000)
    // data is an object containing properties specific to that event
);

const seconds = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
        default:
            // some other error occurred
            break;
    }
});

localStorage.removeItem("ui-theme");