import Sounds from "./sound.js"

export default function Timer ({minutesDisplay,secondsDisplay, stop}) {
    let timeout
    let minutes = minutesDisplay.textContent

    function updateDysplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    
    function stopwatch() {
        timeout = setTimeout(() => {
            let minutes = minutesDisplay.textContent
            let seconds = secondsDisplay.textContent
            
            if (minutes<=0 && seconds<=0) {
                reloadTimer()
                Sounds().timeEnd()
                return
            }
            
            if (seconds<=0) {
                seconds = 60
                --minutes
            }
            
            updateDysplay(minutes, --seconds)
            
            stopwatch()
            }, 100)
    }

    function reloadTimer() {
        clearTimeout(timeout)
        updateDysplay(minutes, 0)
        stop()
    }
        
    function pause() {
        clearTimeout(timeout)
    }

    function attTimer(newminutes) {
        minutes = newminutes
    }

        
    return {updateDysplay, stopwatch, reloadTimer, pause, attTimer}

}