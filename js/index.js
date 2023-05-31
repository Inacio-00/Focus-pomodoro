const html = document.documentElement
const buttonTheme = document.querySelector(".oi")
const buttonSoundOn = document.querySelector(".buttonSound-on")
const buttonSoundOff = document.querySelector(".buttonSound-off")
const buttonSoundOnLight = document.querySelector(".buttonSound-on-light") 
const buttonSoundOffLight = document.querySelector(".buttonSound-off-light")
const buttonPlay = document.querySelector(".buttonPlay")
const buttonPause = document.querySelector(".buttonPause")
const buttonStop = document.querySelector(".buttonStop")
const buttonTimer = document.querySelector(".buttonTimer")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
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
            reloadTime()
            return
        }

        if (seconds<=0) {
            seconds = 60
            --minutes
        }

        updateDysplay(minutes, --seconds)

        stopwatch()}, 1000)
}

function reloadTime() {
    clearTimeout(timeout)
    updateDysplay(minutes, 0)
}

buttonTheme.addEventListener('click', () => {
    html.classList.toggle("light")

    if (html.classList.contains("light")){
        buttonTheme.classList.remove('backdarktheme')
        buttonSoundOn.classList.add("hide")
        buttonSoundOnLight.classList.remove("hide")
    }

    else {
        buttonTheme.classList.add("backdarktheme")
        buttonSoundOn.classList.remove("hide")
        buttonSoundOnLight.classList.add("hide")
    }
})

buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonTimer.classList.add("hide")
    buttonStop.classList.remove("hide")
    stopwatch()
})

buttonPause.addEventListener('click', () => {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
    clearTimeout(timeout)
})

buttonStop.addEventListener('click', () => {
    buttonStop.classList.add("hide")
    buttonTimer.classList.remove("hide")
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
    reloadTime()

})

buttonTimer.addEventListener('click', () => {
    let newminutes = prompt("Quantos minutos deseja cronometrar")

    minutes = newminutes
    updateDysplay(minutes,0)
})


buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")
})

buttonSoundOff.addEventListener('click', () => {
    buttonSoundOff.classList.add("hide")
    buttonSoundOn.classList.remove("hide")
})

buttonSoundOnLight.addEventListener('click', () => {
    buttonSoundOnLight.classList.add("hide")
    buttonSoundOffLight.classList.remove("hide")
})

buttonSoundOffLight.addEventListener('click', () => {
    buttonSoundOffLight.classList.add("hide")
    buttonSoundOnLight.classList.remove("hide")
})