const videoPlayer = document.getElementById('video-player');
const videoSource = document.getElementById('video-source');

const videoList = [
    'vdo/01.mp4',
    'vdo/02.mp4',
    'vdo/03.mp4',
    'vdo/04.mp4',
    'vdo/05.mp4',
    'vdo/06.mp4',
    'vdo/07.mp4',
    'vdo/08.mp4',
    'vdo/09.mp4',
    'vdo/10.mp4',
    'vdo/11.mp4',
    'vdo/12.mp4',
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