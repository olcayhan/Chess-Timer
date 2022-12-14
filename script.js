
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const ball = document.querySelector('.ball');
const times = document.querySelectorAll('.times');

let isOnceClick = false;
let isOnceClick2 = true;
let clicked = false;
var timeSet = 0;
ball.addEventListener('click', ballClick)

function ballClick() {
    clicked ? ball.style.transform = 'translateY(0%)' : ball.style.transform = 'translateY(100%)'
    clicked ? clicked = false : clicked = true;

    clicked ? console.log("beyaz") : console.log("siyah")

    isOnceClick2 && playTimeOut(timeSet)
    isOnceClick2 = false;
    isOnceClick = true;

}



times.forEach((item) => {

    return item.addEventListener("click", (e) => {
        if (isOnceClick == false) {

            timeSet = parseInt(e.target.innerHTML) * 60000

            var minutes = Math.floor((timeSet % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeSet % (1000 * 60)) / 1000);


            screen1.innerHTML = (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds)
            screen2.innerHTML = (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds)
        }
    })


})


function playTimeOut(timeSet) {

    let timeSet1 = timeSet;
    let timeSet2 = timeSet;

    setInterval(() => {
        if (clicked && timeSet1 > 0) {
            timeSet1 = timeSet1 - 1000;

            minutes = Math.floor((timeSet1 % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((timeSet1 % (1000 * 60)) / 1000);

            screen2.innerHTML = (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds)


        }
        else if (!clicked && timeSet2 > 0) {
            timeSet2 = timeSet2 - 1000;

            minutes = Math.floor((timeSet2 % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((timeSet2 % (1000 * 60)) / 1000);

            screen1.innerHTML = (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds)

        }
    }, 1000)


}








