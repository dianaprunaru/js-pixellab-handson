function onButtonClick() {
  alert('Butonul a fost apasat.');
}

const buttonElement = document.querySelector('.btn');

const mediaQueryString = '(min-width: 650 px)';
const mediaQueryList = window.matchMedia(mediaQueryString);
if (mediaQueryList.matches) {
  buttonElement.addEventListener('click', onButtonClick);
}

mediaQueryList.addEventListener('change', function (event) {
  const matches = event.matches;

  if (matches === true) {
    buttonElement.addEventListener('click', onButtonClick);
  } else {
    buttonElement.removeEventListener('click', onButtonClick);
  }
});
