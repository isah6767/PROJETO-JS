const turnon = document.getElementById('turnOn');
const turnoff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
function lampOn() {
    lamp.src = 'img/acessa.jpg'
}

function lampOff() {
    lamp.src = 'img/apagada.jpg'
}
function lampQ(){
    lamp.src = 'img/quebrada.jpg'
}
turnon.addEventListener('click', lampOn);
turnoff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick',lampQ);
lamp.addEventListener('mouseleave',lampOff);