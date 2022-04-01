let offset = 0;
let slider = document.querySelector('.offer__slide')

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