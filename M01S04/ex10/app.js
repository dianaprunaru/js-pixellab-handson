var person = {
  name: 'Diana',
  surname: 'Prunaru',
  age: 31,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],

  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `Folosind obiectul person si forEach, afiseaza skillurile
  din pozitiile impare ale arrayului.`,
);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(`In mod similar, afiseaza skillurile care contin litera a. `);

var char = 'a';

person.skills.forEach(function (skill) {
  if (String.indexOf.char) {
    console.log(skill);
  }
});

console.warn(
  ` Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."`,
);
var message = '';
var punctuation = ', ';
person.friends.forEach(function (friend) {
  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  message +=
    'Prietenii mei se numesc ' +
    friend.name +
    ' ' +
    friend.surname +
    punctuation;
});
console.log(message);
// nu stiu ce gresesc aici. Oare var punctuation trebuie sa fie in interiorul forEach?

console.warn(
  `Folosind forEach, afiseaza numarul total de ani pe care il au
  persoanele din arrayul friends, doar daca au varsta mai mare
  decat 30 inclusiv.`,
);
person.friends.forEach(function (friend) {
  // cum calculez suma varstelor tuturor prietenilor? Aceeasi lacuna am avut si la ex 06
});
console.log();

console.warn(
  `Folosind forEach, afiseaza suma anilor de nastere ai persoanelor care au varsta impara. `,
);

person.friends.forEach(function (friend) {
  // same as previous
});

console.warn(
  `Afiseaza fraza: "Intre Dragos si Larry este o diferenta
  de xx ani. Intre Dragos si Steven... "`,
);
var message = '';
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  // v2 concatenare
  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
});
console.log(message);

console.warn(
  `Folosind metoda reverse si apoi forEach, afiseaza in
  ordine inversa elementele arrayului skills.`,
);
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

for (var i = 0; i < 99; i++) {
  console.log(i);
}
