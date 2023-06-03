import Theme from "./theme.js"
import Timer from "./timer.js"
import Controls from "./controls.js"
import Sounds from "./sound.js"

const html = document.documentElement
const buttonTheme = document.querySelector(".theme")
const buttonSoundOn = document.querySelector(".buttonSound-on")
const buttonSoundOff = document.querySelector(".buttonSound-off")
const buttonPlay = document.querySelector(".buttonPlay")
const buttonPause = document.querySelector(".buttonPause")
const buttonStop = document.querySelector(".buttonStop")
const buttonTimer = document.querySelector(".buttonTimer")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")


Theme({buttonTheme, html, buttonSoundOn, buttonSoundOff})

const controls = Controls({buttonPlay, buttonPause, buttonStop, buttonTimer, buttonSoundOn, buttonSoundOff})

const timer = Timer({minutesDisplay, secondsDisplay, stop: controls.stop})

const sounds = Sounds()

buttonPlay.addEventListener('click', () => {
    controls.play()
    timer.stopwatch()
})

buttonPause.addEventListener('click', () => {
    controls.pause()
    timer.pause()
})

buttonStop.addEventListener('click', () => {
    controls.stop()
    timer.reloadTimer()
})

buttonTimer.addEventListener('click', () => {
    let newMinutes = prompt("Quantos minutos deseja cronometrar?")
    if(!newMinutes || isNaN(newMinutes) == true) {
        timer.reloadTimer()
        return
    }
    timer.updateDysplay(newMinutes,0)
    timer.attTimer(newMinutes)
})

buttonSoundOn.addEventListener('click', () => {
    controls.soundOn()
    sounds.bgAudio.pause()
})

buttonSoundOff.addEventListener('click', () => {
    controls.soundOff()
    sounds.bgAudio.play()
})
