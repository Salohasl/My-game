import './styles1.scss';


type HTMLElementWithClass = HTMLElement & { classList: DOMTokenList };
const block: HTMLElementWithClass | null = document.querySelector('.block');
const line: any = document.querySelector('.line');
//const btn: HTMLElement | null = document.querySelector('.gameBtn');
const startBlock: HTMLElement | null = document.querySelector('.start-block');
const btnStart: any = document.querySelector('.start');
const num: any = document.querySelector('p');
const game: any = document.querySelector('.game');


btnStart?.addEventListener('click', () => {
    setTimeout(() => {
        game.style.display = 'block';
    }, 1000);
    startBlock.style.display = 'none';
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
            document.body.style.backgroundColor = 'yellow';
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
            line.style.animationDuration = '3s';
            game.style.display = 'none';
            startBlock.style.display = 'flex';
        }
    }
}, 10);
        