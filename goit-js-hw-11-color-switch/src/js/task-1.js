
import colors from '../data/colors-body.js'
import refs from '../data/refs.js'


refs.start.addEventListener('click', changeColorBody);
refs.stop.addEventListener('click', onClickStop);

const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
};


let intervalId;

function changeColorBody() {
     console.log('клик по кнопке старт')
        intervalId = setInterval(() => {
           refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]
            
        }, 1000);
         refs.stop.disabled = false; 
        refs.start.disabled = true;
};

function onClickStop() {
    console.log('клик по кнопке стоп');
    clearInterval(intervalId);
    
    refs.start.disabled = false;
    refs.stop.disabled = true;
};















