// Get the video
var video = document.getElementById("videoWindow");

// Get the button
var btn = document.getElementById("videoBtn");

// Get the span
var muteGlyph = document.getElementById("muteGlyph");

// Pause and play the video, and change the button text
function muteAudio() {
    if (video.muted) {
        video.muted = false;
        muteGlyph.classList.remove('glyphicon-music');
        muteGlyph.classList.add('glyphicon-volume-off');
    } else {
        video.muted = true;
        muteGlyph.classList.remove('glyphicon-volume-off');
        muteGlyph.classList.add('glyphicon-music');
    }
}