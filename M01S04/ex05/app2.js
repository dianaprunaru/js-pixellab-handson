var defaultNumber = 2;
var defaultWarningMessage = `Nu ai introdus un numar. Folosesc ${defaultNumber}`;

var i = 0;
var number = prompt('Introdu un numar');

if (number === null || number.trim().length === 0) {
  console.warn(defaultWarningMessage);
  number = defaultNumber;
} else {
  number = Number(number);
}

if (isNaN(number) === true) {
  console.warn('Nu ai introdus un numar. Folosesc 2');
  number = 2;
}

for (i = 4; i <= 1000; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${number}`);
}
