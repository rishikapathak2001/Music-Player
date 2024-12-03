function playPause() {
    if (controlicon.classList.contains('fa-pause')) {
        song.pause();
        controlicon.classList.remove('fa-pause');
        controlicon.classList.add('fa-play');
    } else {
        song.play();
        controlicon.classList.add('fa-pause');
        controlicon.classList.remove('fa-play');
    }
}

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

song.addEventListener('play', () => {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
});

progress.onchange = function () {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play();
    }
    controlicon.classList.add('fa-pause');
    controlicon.classList.remove('fa-play');
};
