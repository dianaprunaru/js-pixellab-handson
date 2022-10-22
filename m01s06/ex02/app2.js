const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
const message = 'Nu stim ce browser folosesti';

if (userAgentString.includes('firefox')) {
  setTimeout(function () {
    return (message = 'Navighez folosind Chrome');
  });
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);
