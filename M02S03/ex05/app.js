const debounce = throttleDebounce.debounce;
let oldWidth = window.innerWidth;
let oldHeight = window.innerHeight;
showMessage(oldWidth, 'message');

const debouncedResize = debounce(1000, function () {
  const newWidth = this.innerWidth;
  showMessage(this.innerWidth.toString());

  if (oldWidth !== newWidth) {
    showMessage(`Fereastra si-a schimbat latimea. ${newWidth}`, 'message2');

    oldWidth = newWidth;
  }
});

window.addEventListener('resize', debouncedResize);

const resized = debounce(1000, function () {
  const newWidth = this.innerWidth;
  const newHeight = this.innerHeight;

  if (oldWidth !== newWidth && oldHeight !== newHeight) {
    let newSurface = newWidth * newHeight;
    showMessage(
      `Fereastra are acum suprafata de ${newSurface} pixeli.`,
      'message3',
    );
    oldWidth = newWidth;
    oldHeight = newHeight;
  }
});
window.addEventListener('resize', resized);

// hoisting
function showMessage(message, className = 'message') {
  let paragraphElement = document.querySelector('.' + className);

  if (paragraphElement === null) {
    paragraphElement = document.createElement('p');
    paragraphElement.classList.add(className);
    document.body.append(paragraphElement);
  }

  paragraphElement.innerText = message;
}
