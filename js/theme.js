export default function Theme ({buttonTheme, html, buttonSoundOn, buttonSoundOff}) {

    buttonTheme.addEventListener('click', () => {
        html.classList.toggle("light")
    
        if (html.classList.contains("light")){
            buttonTheme.classList.remove('backdarktheme')
            buttonSoundOn.style.background = "url(imagens/button-sound-on-light.svg)";
            buttonSoundOff.style.background = "url(imagens/button-sound-off-light.svg)";
        }
        else {
            buttonTheme.classList.add("backdarktheme")
            buttonSoundOn.style.background = "url(imagens/button-sound-on.svg)";
            buttonSoundOff.style.background = "url(imagens/button-sound-off.svg)";
        }
        }
    )
}