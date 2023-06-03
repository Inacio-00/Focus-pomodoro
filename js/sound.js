export default function() {
    const kitchenTimer = new Audio("musicas/kichen-timer.mp3")
    const bgAudio = new Audio("musicas/bgAudio.mp3")

    bgAudio.loop = true

    function timeEnd() {
        kitchenTimer.play()
    }

    return {
        timeEnd,
        bgAudio
    }
} 