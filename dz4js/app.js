let num = 0

const incrementButton = document.querySelector('#increment')
const decrementButton = document.querySelector('#decrement')
const counter = document.querySelector('#counter')

const changeColor = (color) => {
    counter.innerText = num
    counter.style.color = color
}

const increment = () => {
    num++
    changeColor('green')
}

const decrement = () => {
    if (num > 0) {
        num--
        changeColor('red')
    }
}

incrementButton.onclick = () => increment()
decrementButton.onclick = () => decrement()

const container = document.getElementById('container');
const coordinatElement = document.getElementById('coordinat');


container.addEventListener('mousemove', (e) => {

    const x = e.offsetX;
    const y = e.offsetY;


    coordinatElement.textContent = `Координаты: X: ${x}, Y: ${y}`;
});
const btnPlus = document.querySelector('.increment')
const btnMinus = document.querySelector('.decrement')
const counterResults = document.querySelector('.counter')



const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const textTraffic = document.querySelector('.text_traffic')
const colorTrafficChange = (color) => {
    red.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')

    if (color.toLowerCase() === 'красный'){
        red.classList.add('active')
        alert('STOP')
    }else if(color.toLowerCase() === 'желтый'){
        yellow.classList.add('active')
        alert('WAIT')
    }else if(color.toLowerCase() === 'зеленый'){
        green.classList.add('active')
        alert('GO')
    }else{
        alert('Не правильный цвет')
    }
}
const writeColor = prompt('Введите цвет светофора')
colorTrafficChange(writeColor)

