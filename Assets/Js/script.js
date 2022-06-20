function Game() {
    const pontuacao = document.querySelector('.points');
    flag = 0;
    point = 0;
    highScore = 0;
    let mode = 'stop';


    document.addEventListener('keypress', (e) => {
        if (flag === 0) {
            this.jump();
        } else {
            return;
        }
    });

    document.addEventListener('click', (e) => {
        el = e.target;

        if (flag === 0) {
            this.jump();
        } else {
            return;
        }

        if (el.classList.contains('buttonPaused')) {
            this.play();

        }

        if (el.classList.contains('reset')) {
            this.paused();
        }

        if (el.classList.contains('gameOver')) {

        }
    })


    this.play = () => {

        const buttonPaused = document.querySelector('.buttonPaused');
        const arbusto = document.querySelector('.arbusto');
        const nuvem = document.querySelector('.clouds');

        mode = 'isRun';

        this.reloadHs();
        if (buttonPaused) {
            buttonPaused.remove();


            arbusto.style.animation = 'arbustoMove 2s infinite linear';
            nuvem.style.animation = 'nuvens 22s infinite linear';
            pointsComputed();

        } else {

        }
    }


    this.paused = () => {

        if (mode !== 'gameover') {
            mode = 'stop';
            pointsComputed();

            const arbusto = document.querySelector('.arbusto');
            const nuvem = document.querySelector('.clouds');


            arbusto.style.animation = 'inherit';
            nuvem.style.animation = 'inherit';


            this.window('buttonPaused', 'PLAY');
        }
    }

    this.window = (className, text) => {
        const container = document.querySelector('.container');

        const div = document.createElement('div');
        div.innerHTML = text;
        div.classList.add(className);

        container.appendChild(div);
    }

    this.jump = () => {
        const dog = document.querySelector('.dog');

        if (mode === 'isRun') {
            flag = 1;
            dog.classList.add('dogjump');

            setTimeout(() => {
                dog.classList.remove('dogjump');
                flag = 0;
            }, 700);
        }
    }

    pointsComputed = () => {
        if (mode === 'isRun') {
            this.pontos = setInterval(() => {
                const pontuacao = document.querySelector('.points');

                point++
                pontuacao.innerHTML = point;

                highscore = point;
            }, 100);
        } else {
            clearInterval(this.pontos);
            point = 0;
        }
    }

    this.loop =
        setInterval(() => {

            const arbusto = document.querySelector('.arbusto');
            const arbustoPosition = arbusto.offsetLeft;

            const dog = document.querySelector('.dog');
            const dogPosition = +window.getComputedStyle(dog).bottom.replace('px', '');

            if (arbustoPosition <= 130 && arbustoPosition >= -20 && dogPosition < 50) {

                //Definindo posição do arbusto;
                arbusto.style.animation = 'none';
                arbusto.style.left = `${arbustoPosition}px`;

                //definindo posição do ambiente;

                this.salvarPontos(point)



                //definindo posição do dog;
                dog.src = './Assets/Img/god.png';
                dog.style.bottom = `${dogPosition}px`;
                dog.style.animation = 'none';

                clearInterval(this.loop);

                mode = 'gameover';
                pointsComputed();

                this.window('gameOver', 'JOGAR NOVAMENTE');

            }

        }, 10);


    this.reset = () => {
        const dog = document.querySelector('.dog');
        const arbusto = document.querySelector('.arbusto');
        const buttonGameOver = document.querySelector('.gameOver');


        document.onsubmit;
        this.paused();
    }

    this.salvarPontos = (pontos) => {

        const hs = document.querySelector('.highpoints');
        const highscored = pontos;

        if (highscored > hs.innerHTML) {
            const highJson = JSON.stringify(highscored);
            localStorage.setItem('games', highJson);

            hs.innerHTML = highscored;
            this.reloadHs();
        } else {
            return;
        }



    }

    this.reloadHs = () => {
        const highJson = localStorage.getItem('games');

        const hs = document.querySelector('.highpoints');
        hs.innerHTML = highJson;
    }


}

const gamer = new Game();
