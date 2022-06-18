const steve = document.querySelector('.steve');
const zombie = document.querySelector('.zombie');
const background = document.querySelector('.background');

const jump = () => {
    steve.classList.add('jump');

    setTimeout(()=>{

        steve.classList.remove('jump');
   
    }, 900);
}
const loop = setInterval(() => {

    const zombiePosition = zombie.offsetLeft;
    const stevePosition = +window.getComputedStyle(steve).bottom.replace('px','');

    if (zombiePosition <= 50 && zombiePosition > 0 && stevePosition < 200){

        zombie.style.animation = 'none';
        zombie.style.left = `${zombiePosition}px`;

        steve.style.animation = 'none';
        steve.style.bottom = `${stevePosition}px`;
        steve.src = 'images/gameover.png'
        steve.style.width = '150px'

        background.src = 'images/gameoverbkg.png'
     
        clearInterval(loop);
    }
    
   }

, 10);

document.addEventListener('keydown', jump);