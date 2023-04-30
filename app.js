//Clock 
//Variables

const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

//Functions Clock

function setTime() {
const currentDate = new Date();
const secondRatio = currentDate.getSeconds() / 60;
const minuteRatio =  (secondRatio + currentDate.getMinutes()) / 60;
const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

wareegSamee(secondHand, secondRatio);
wareegSamee(minuteHand, minuteRatio);
wareegSamee(hourHand, hourRatio);
}

function wareegSamee(element, rotationRatio){
    element.style.setProperty('--wareeg', rotationRatio * 360);
}
setTime();
setInterval(setTime, 1000)

//Buttons
//Variables

const btnOne = document.getElementById('button1');
const btnTwo = document.getElementById('button2');
const btnThree = document.getElementById('button3');
const btnFour = document.getElementById('button4');
const btnFive = document.getElementById('button5')
const Clock = document.querySelector('.clock');
const buttons = document.querySelectorAll('.button');
//Changing Nodelist To Array---->
const buttonsArray = Array.from(buttons);

const colors = ['#f2a63c', '#af0a0a', '#dee1b3', '#e6cc08', '#0633a6'];

//Event Listener
buttonsArray[0].addEventListener('click', ChangeToOrange );
buttonsArray[1].addEventListener('click', ChangeToRed );
buttonsArray[2].addEventListener('click', ChangeToGray);
buttonsArray[3].addEventListener('click', ChangeToYellow );
buttonsArray[4].addEventListener('click', ChangeToBlue );




function ChangeToOrange() {
    Clock.style.background = colors[0];
}
function ChangeToRed() {
    Clock.style.background = colors[1];
}
function ChangeToGray() {
    Clock.style.background = colors[2];
}
function ChangeToYellow() {
    Clock.style.background = colors[3];
}
function ChangeToBlue() {
    Clock.style.background = colors[4];
}
