const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
  
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500 )
}  

const loop = setInterval (() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 75) {

        pipe.style.animanion = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animanion = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imgs/game-over.png'
        mario.style.width = '74px'
        mario.style.marginLeft = '45px'
        mario.style.marginBottom = '45px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);
