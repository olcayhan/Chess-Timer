const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const ball = document.querySelector('.ball');

let clicked = false;


ball.addEventListener('click', ballClick)

function ballClick() {
    clicked ? ball.style.transform = 'translateY(0%)' : ball.style.transform = 'translateY(100%)'
    clicked ? clicked = false : clicked = true;
}

