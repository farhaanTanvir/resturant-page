const starters = document.querySelector('#starters');
const mains = document.querySelector('#mains');
const desserts = document.querySelector('#desserts');
const drinks = document.querySelector('#drinks');

const starterCards = document.querySelectorAll('.starters');
const mainCards = document.querySelectorAll('.mains');
const dessertCards = document.querySelectorAll('.desserts');
const drinkCards = document.querySelectorAll('.drinks');

starters.addEventListener('click', (e) => {
    e.stopPropagation();
    starterCards.forEach(item => item.classList.add('active'));
    mainCards.forEach(item => item.classList.remove('active'));
    dessertCards.forEach(item => item.classList.remove('active'));
    drinkCards.forEach(item => item.classList.remove('active'));
    starters.classList.add('underline');
    mains.classList.remove('underline');
    desserts.classList.remove('underline');
    drinks.classList.remove('underline');
})

mains.addEventListener('click', (e) => {
    e.stopPropagation();
    starterCards.forEach(item => item.classList.remove('active'));
    mainCards.forEach(item => item.classList.add('active'));
    dessertCards.forEach(item => item.classList.remove('active'));
    drinkCards.forEach(item => item.classList.remove('active'));
    starters.classList.remove('underline');
    mains.classList.add('underline');
    desserts.classList.remove('underline');
    drinks.classList.remove('underline');
})

desserts.addEventListener('click', (e) => {
    e.stopPropagation();
    starterCards.forEach(item => item.classList.remove('active'));
    mainCards.forEach(item => item.classList.remove('active'));
    dessertCards.forEach(item => item.classList.add('active'));
    drinkCards.forEach(item => item.classList.remove('active'));
    starters.classList.remove('underline');
    mains.classList.remove('underline');
    desserts.classList.add('underline');
    drinks.classList.remove('underline');
})

drinks.addEventListener('click', (e) => {
    e.stopPropagation();
    starterCards.forEach(item => item.classList.remove('active'));
    mainCards.forEach(item => item.classList.remove('active'));
    dessertCards.forEach(item => item.classList.remove('active'));
    drinkCards.forEach(item => item.classList.add('active'));
    starters.classList.remove('underline');
    mains.classList.remove('underline');
    desserts.classList.remove('underline');
    drinks.classList.add('underline');
})


