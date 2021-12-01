const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select the media screen, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.sourceObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch Error here
        console.log('Woops, error here:', error);
    }
}

button.addEventListener('click', async() => {
    // Disable the button
    button.disable = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset the button
    button.disable = flase;
});

// On Load
selectMediaStream();
