let panelShow = document.querySelector('#titleSelect');
let drinkShow = document.querySelector('#drink');

document.querySelector('#expresso').addEventListener('click', () => {
    panelShow.textContent = 'Expresso Selected';
    drinkShow.style.display = 'block';
});

document.querySelector('#latte').addEventListener('click', () => {
    panelShow.textContent = 'Latte Selected';
    drinkShow.style.display = 'block';
});

document.querySelector('#tea').addEventListener('click', () => {
    panelShow.textContent = 'Tea Selected';
    drinkShow.style.display = 'block';
});

document.querySelector('#long').addEventListener('click', () => {
    panelShow.textContent = 'Long Black Selected';
    drinkShow.style.display = 'block';
});

document.querySelector('#machiatto').addEventListener('click', () => {
    panelShow.textContent = 'Machiatto Selected';
    drinkShow.style.display = 'block';
});

document.querySelector('#chocolate').addEventListener('click', () => {
    panelShow.textContent = 'Chocolate Selected';
    drinkShow.style.display = 'block';
});
