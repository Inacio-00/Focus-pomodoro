export default function Controls({buttonPlay, buttonPause, buttonStop, buttonTimer, buttonSoundOn, buttonSoundOff}) {
    function play() {
        buttonPlay.classList.add("hide")
        buttonPause.classList.remove("hide")
        buttonTimer.classList.add("hide")
        buttonStop.classList.remove("hide")
    }

    function pause() {
        buttonPause.classList.add("hide")
        buttonPlay.classList.remove("hide")
    }
    
    function stop() {
        buttonStop.classList.add("hide")
        buttonTimer.classList.remove("hide")
        buttonPause.classList.add("hide")
        buttonPlay.classList.remove("hide")
    }

    function soundOn() {
        buttonSoundOn.classList.add("hide")
        buttonSoundOff.classList.remove("hide")

    }

    function soundOff() {
        buttonSoundOff.classList.add("hide")
        buttonSoundOn.classList.remove("hide")
       
    }

    return {play, pause, stop, soundOn, soundOff}
}