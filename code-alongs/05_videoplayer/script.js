console.log('hi script.js')

const video = document.querySelector('video')
const playButton = document.querySelector('#play')
const pauseButton = document.querySelector('#pause')
const muteButton = document.querySelector('#mute')
const unmuteButton = document.querySelector('#unmute')

pauseButton.classList.add("hidden");
unmuteButton.classList.add("hidden");

playButton.addEventListener("click", function(e) {
    video.play();
    pauseButton.classList.remove("hidden");
    playButton.classList.add("hidden");
})

pauseButton.addEventListener("click", function(e) {
    video.pause();
    playButton.classList.remove("hidden");
    pauseButton.classList.add("hidden");
})

muteButton.addEventListener("click", function(e) {
    video.muted();
    unmuteButton.classList.remove("hidden");
    muteButton.classList.add("hidden");
})

unmuteButton.addEventListener("click", function(e) {
    video.unmuted();
    muteButton.classList.remove("hidden");
    unmuteButton.classList.add("hidden");
})