
let flag = 0;
let point = 0;

const jump = () => {
    const dog = document.querySelector('.dog');

    flag = 1;
    dog.classList.add('dogjump');

    setTimeout(() => {
        dog.classList.remove('dogjump');
        flag = 0;
    }, 700);

}

let highscore = 0;

const pontos = setInterval(() => {
    const pontuacao = document.querySelector('.points');

    point++
    pontuacao.innerHTML = point;

    highscore = point;
}, 100);
 

document.addEventListener('keypress', () => {
    if (flag === 0) {
        jump();
    } else {
        return;
    }
});

document.addEventListener('click', () => {
    if (flag === 0) {
        jump();
    } else {
        return;
    }
});

const loop = setInterval(() => {
    const arbusto = document.querySelector('.arbusto');
    const arbustoPosition = arbusto.offsetLeft;

    const ambiente1 = document.querySelector('.back');
    const ambiente2 = document.querySelector('.back2');
    const ambienteMov1 = ambiente1.offsetLeft;
    const ambienteMov2 = ambiente2.offsetLeft;

    const dog = document.querySelector('.dog');
    const dogPosition = +window.getComputedStyle(dog).bottom.replace('px', '');

    if (arbustoPosition <= 130 && arbustoPosition >= -20 && dogPosition < 50) {

        //Definindo posição do arbusto;
        arbusto.style.animation = 'none';
        arbusto.style.left = `${arbustoPosition}px`;

        //definindo posição do ambiente;
        ambiente1.style.animation = 'none';
        ambiente2.style.animation = 'none';
        ambiente1.style.left = `${ambienteMov1}px`;
        ambiente2.style.left = `${ambienteMov2}px`;

        //definindo posição do dog;
        dog.src = './Assets/Img/god.png';
        dog.style.bottom = `${dogPosition}px`;
        dog.style.animation = 'none';

        clearInterval(loop);
        clearInterval(pontos);
    }

}, 10);

