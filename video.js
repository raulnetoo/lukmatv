const videoPlayer = document.getElementById('video-player');
const videoSource = document.getElementById('video-source');

const videoList = [
    'vdo/vdo01.mp4',
    'vdo/vdo02.mp4',
    'vdo/vdo03.mp4'
];

let currentVideoIndex = 0;

function playRandomVideo() {
    const randomIndex = Math.floor(Math.random() * videoList.length);
    currentVideoIndex = randomIndex;
    videoSource.src = videoList[currentVideoIndex];
    videoPlayer.load();
    videoPlayer.play();
}

videoPlayer.addEventListener('ended', () => {
    // Play the next video when the current video ends
    currentVideoIndex = (currentVideoIndex + 1) % videoList.length;
    videoSource.src = videoList[currentVideoIndex];
    videoPlayer.load();
    videoPlayer.play();
});

playRandomVideo(); // Play the first random video