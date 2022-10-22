// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i <= 100);

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).

// var i = 1;

// do {
//   console.log(i);

//   if (i === 50) {
//     i++;
//     break;
//   }

//   i++;
// } while (i < 100);

// 'Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.',

var i = 5;
var number = prompt('Introdu un numar');
var limit = prompt('Introdu o limita superioara');

do {
  console.log(i);

  if (i % 5 === 0; i <= limit;) {
    i++;
    continue;
  }

  i++;
} while (i < limit);
