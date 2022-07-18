const button = document.getElementById('clicker');
const removeButton = document.getElementById('remove');
const eventListener = () => {
  alert('ai apasat butonul');
};

button.addEventListener('click', eventListener);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', eventListener);
});

console.warn(`4. Adauga un buton nou in document cu id-ul query si
folosind addEventListener() ataseaza un eveniment care sa
foloseasca metoda prompt() pentru a afla varsta utilizatorului.`);

const queryButton = document.getElementById('query');
const eventListener2 = () => {
  let data = prompt('Introdu varsta');
  console.log(`Ai ${data} ani.`);
};
queryButton.addEventListener('click', eventListener2);

console.warn(`5. Salveaza rezultatul metodei prompt intr-o
variabila si afiseaza in consola folosind template strings:
“Ai aa ani.”.`);

console.warn(`6. Creaza un paragraf cu idul message si folosind
getElementById() stocheaza elementul intr-o variabila, apoi
folosind innerText, afiseaza mesajul de mai devreme in
acest paragraf.`);
let data = prompt('Introdu varsta');
const message = `Ai ${data} ani.`;
const paragraphElement = document.getElementById('message');
paragraphElement.innerText = message;
