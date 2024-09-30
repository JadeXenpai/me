const toggleButton = document.getElementById('toggleButton');
const audio = document.getElementById('audio');

toggleButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        toggleButton.textContent = 'Stop';
    } else {
        audio.pause();
        toggleButton.textContent = 'Play';
    }
});
