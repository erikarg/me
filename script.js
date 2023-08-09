const images = document.querySelectorAll('.projects-container img');
let dots = document.querySelectorAll('.dot');
const navbar = document.querySelectorAll('.navbar');
const items = document.querySelectorAll('.menu-items li');
const checkbox = document.getElementById('checkbox');

let currentIndex = 0;
const interval = 3000;

function changeSlide(position) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }
  currentIndex = position;
  images[currentIndex].style.opacity = 1;
  dots[currentIndex].className += ' active';
}

items.forEach((item) => {
  item.addEventListener('click', function () {
    checkbox.click();
  });
});

function copyToClibpoard() {
  let text = 'erikatrue@gmail.com';
  navigator.clipboard.writeText(text);
  alert('O email foi copiado!');
}
