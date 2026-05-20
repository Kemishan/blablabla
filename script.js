// script.js

// SELECT VIDEO
const video = document.getElementById("myVideo");

// VIDEO SETTINGS
video.muted = true;
video.autoplay = true;
video.loop = true;

// AUTO PLAY VIDEO
window.addEventListener("load", () => {
    video.play();
});

// CLICK TO PAUSE OR PLAY
video.addEventListener("click", () => {

    if(video.paused){
        video.play();
    } else{
        video.pause();
    }

});