const container = document.querySelector('.container');
const text = document.querySelector('#text');
const button = document.querySelector('.button')
const synth = window.speechSynthesis;


const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5

const audio = new Audio('./img/lalala.mp3')

button.addEventListener('click',()=>{
    speak('El retardor. Ayayayah')
    audio.play()
   

})
function speak(message) {
    let msg = new SpeechSynthesisUtterance(message)
    let voices = synth.getVoices()
    msg.voice = voices[4];
    synth.speak(msg)
}
const breathAnimation = () => {
    text.innerHTML = 'Breathe In..'
    // speak('Breathe in!')
    container.className = 'container grow'
    
    setTimeout(() => {
        text.innerText = "Hold !"
        // speak('Hold ')


        
        setTimeout(() => {
            text.innerText = 'Breathe Out'
            // speak('Breathe Out!')

            container.className = 'container shrink'
        }, holdTime)
    }, breathTime)
}
breathAnimation()

setInterval(breathAnimation,totalTime)