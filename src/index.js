import './styles/index.scss';

// Таймер
const hours = 12;
const minutes = 30;
const seconds = 30;

window.onload = function startTimer() {
  let timer = { h: hours, m: minutes, s: seconds }
  document.querySelector(".hero__offer-timer").innerHTML = timer.h + ':' + timer.m + ':' + timer.s;
  setInterval(function () {

    timer.m = timer.m < 10 ? "0" + timer.m : timer.m;
    timer.s = timer.s < 10 ? "0" + timer.s : timer.s;


    document.querySelector(".hero__offer-timer").innerHTML = timer.h + ':' + timer.m + ':' + timer.s;

    if (timer.s == 0) {
      timer.m--;
      timer.s = 60;
    }
    if (timer.m == 0) {
      timer.h--;
      timer.m = 60
    }
    timer.s--;


  }, 1000)
}

// Логика галереи

const bigPhoto = document.querySelector('.product__photo-big');
const prewiews = document.querySelectorAll('.product__photo-prewiew');

function setAsMainPhoto(prewiew) {
  bigPhoto.src = prewiew.src;
  makeBlur();
}

prewiews.forEach((prewiew) => {
  prewiew.onclick = () => setAsMainPhoto(prewiew);
})

function makeBlur() {
  prewiews.forEach((prewiew) => {
    if (prewiew.src === bigPhoto.src) {
      prewiew.classList.add('product__photo-prewiew_active')
    } else {
      prewiew.classList.remove('product__photo-prewiew_active')
    }
  })
}
makeBlur();

