let offset = 0;
let slider = document.querySelector('.offer__slide')
let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')

document.querySelector('.offer__slider-next').addEventListener('click', function() {
    offset += 585;
    if(offset > 1755){
        offset = 0;
    }
    slider.style.left = offset + 'px';
})

document.querySelector('.theleft').addEventListener('click', function() {
    offset -= 585;
    if(offset < 0){
        offset = 1755;
    }
    slider.style.left = -offset + 'px';
})


const deadline = new Date(`2022-04-09`);

function updateCounter() {
  const currentTime = new Date();
  const dist = deadline - currentTime;

  const toDays = Math.floor(dist / 1000 / 60 / 60 / 24);
  const toHours = Math.floor(dist / 1000 / 60 / 60) % 24;
  const toMinutes = Math.floor(dist / 1000 / 60) % 60;
  const toSeconds = Math.floor(dist / 1000) % 60;

  days.innerText = toDays;
  hours.innerText = toHours < 10 ? "0" + toHours : toHours;
  minutes.innerText = toMinutes < 10 ? "0" + toMinutes : toMinutes;
  seconds.innerText = toSeconds < 10 ? "0" + toSeconds : toSeconds;
}

updateCounter();

setInterval(updateCounter, 1000);
