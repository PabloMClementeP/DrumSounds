const keys = document.querySelectorAll('.key');
let key,
    sound;


const playSound = (code) =>{
    key = document.querySelector(`.key[data-key="${code}"]`);
    sound = document.querySelector(`.sound[data-key="${code}"]`);

    if(!sound) return;

    sound.currentTime = 0;
    sound.play();

    key.classList.add("playing");
}

keys.forEach(key =>{

    key.addEventListener('transitionend', e =>{
        if(e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    });

    key.addEventListener("click", e => playSound(e.target.dataset.key));
});

window.addEventListener("keydown", e => playSound(e.keyCode));