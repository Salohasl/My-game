import './styles1.scss';

type HTMLElementWithClass = HTMLElement & { classList: DOMTokenList };

const block: HTMLElementWithClass | null = document.querySelector('.block');
const line: HTMLElement | null = document.querySelector('.line');
const startBlock: HTMLElement | null = document.querySelector('.start-block');
const btnStart: HTMLElement | null = document.querySelector('.start');
const num: HTMLElement | null = document.querySelector('.check');
const game: HTMLElementWithClass = document.querySelector('.game');
const gamerText: HTMLElement = document.querySelector('.gamer-text');
const gamerInput: HTMLInputElement = document.querySelector('.gamer');
const optionBlock: HTMLElement | null = document.querySelector('.option-block');
const btnPlayer: NodeList | null = document.querySelectorAll('.btn-player')
const btnGame: HTMLElement | null = document.querySelector('.game-start');

function gameLogic(){

    gamerInput.addEventListener('change', ()=>{
        gamerText.textContent = gamerInput.value;
    })

    gamerInput.addEventListener('blur', ()=>{
        if(gamerInput.value.length > 1){
            btnGame.removeAttribute('disabled');
            btnGame.classList.add('active')
        }
    })

    btnGame?.addEventListener('click', ()=>{
        let countdown: HTMLHeadingElement | null = document.createElement('h1');
        countdown.classList.add('countdown');
        document.body.prepend(countdown);
        countdown.textContent = '5';
        startBlock.style.display = 'none';
        // Функция для уменьшения значения countdown
        const decreaseCountdown = () => {
            if (parseInt(countdown.textContent || "0") > 0) {
                countdown.textContent = (parseInt(countdown.textContent || "0") - 1).toString();
                // Вызываем decreaseCountdown снова через 500ms
                setTimeout(decreaseCountdown, 500);
            } else {
                // После завершения countdown, показываем игру
                game.style.display = 'block';
                countdown.style.display = 'none';
            }
        };
        // Начинаем уменьшение countdown
        decreaseCountdown();
    })

    btnPlayer.forEach(btnPlayer => {
        btnPlayer.addEventListener('click', ()=>{
            if(btnPlayer.textContent === '1'){
                document.getElementById('one-gamer').style.display = 'block';
            }else{
                document.getElementById('one-gamer').style.display = 'none';
                alert('Функция пока дорабатывается');
            }
        })
    })

    btnStart?.addEventListener('click', () => {
        optionBlock.style.display = 'flex';
        btnStart.style.display = 'none';
    });
    
    
    document.addEventListener('keydown', function(event: KeyboardEvent) {
    
        if (event.code === 'Space') {
    
            if (num) {
                num.textContent = (Number(num.textContent) + 1).toString();
            }
            if (block && !block.classList.contains('jump')) {
                block.classList.add('jump');
            }
        
            setTimeout(() => {
                if (block) {
                    block.classList.remove('jump');
                }
            }, 800);
        
            if (num && Number(num.textContent) >= 5 && Number(num.textContent) <= 10) {
                document.body.style.backgroundColor = 'darkBlue';
                line.style.animationDuration = '2s';
            } else if (num && Number(num.textContent) > 10) {
                document.body.classList.add('levelThree');
                line.style.animationDuration = '1s';
            }
    
        }
       
    });
    
    
    const isAlive = setInterval(() => {
        if (block && line) {
            const blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
            const lineLeft = parseInt(window.getComputedStyle(line).getPropertyValue("left"));
            if (lineLeft < 40 && lineLeft > 0 && blockTop >= 10) {
                alert(`Ваш счет ${num?.textContent}`);
                num.textContent = '0';
                document.body.style.backgroundColor = 'black';
                btnStart.style.display = 'block';
                optionBlock.style.display = 'none';
                document.body.classList.remove('levelThree');
                line.style.animationDuration = '3s';
                game.style.display = 'none';
                startBlock.style.display = 'flex';
            }
        }
    }, 10);
            
}

gameLogic();
