import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const iframePlayer = new Vimeo.Player(iframe);
// тестова частина:   
console.log(iframePlayer);
iframePlayer.on('play', function () {
        console.log('played the video!');
    });


    //функціональна частина: 
iframePlayer.on('timeupdate', _.throttle (function(data) {

     localStorage.setItem("videoplayer-current-time", data.seconds); }, 1000)
    // data is an object containing properties specific to that event
);

const seconds = localStorage.getItem("videoplayer-current-time");
iframePlayer.setCurrentTime(seconds).then(function(seconds) {
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