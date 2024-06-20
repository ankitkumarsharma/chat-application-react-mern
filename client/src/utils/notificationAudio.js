import notificationSound from "../assets/audio/notification.mp3"

const notificationAudio = () => {
    const audio = new Audio(notificationSound);
    audio.play();
}

export default notificationAudio;