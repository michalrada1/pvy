document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.menu-polozky').classList.toggle('skryte');
})


const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const submitBtn = document.querySelector('#submit-btn');

window.addEventListener('load', () => {
  popup.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  popup.classList.add('hidden');
});
