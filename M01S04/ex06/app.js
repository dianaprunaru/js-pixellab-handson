var person = {
  name: 'Diana',
  surname: 'Prunaru',
  age: 38,
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
  `1. Folosind obiectul person si un for, afiseaza in consola
  skillurile de pe pozitiile pare ale arrayului.`,
);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (i % 2 === 0) {
    console.log(skill);
  }
}

console.warn(`2. In mod similar, afiseaza skillurile care NU incep cu j.`);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('j') === false) {
    console.log(skill);
  }
}

console.warn(
  `3. Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."`,
);
var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    // aceasta este ultima iteratie
    punctuation = '.';
  }

  // v1 concatenare
  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

console.warn(`4. Folosind un for, afiseaza numarul total de ani pe care
il au persoanele din arrayul friends, doar daca varsta
este mai mare sau egala cu 30 de ani.
`);

var sum = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendAge = friend.age;

  if (friendAge >= 30) {
    sum += friendAge;
  }
  console.log(sum.toString());
}

// aici, Pixeltabul nu se inverzeste. Ce anume gresesc?

console.warn(
  `5. Folosind un for, afiseaza suma anilor de nastere a persoanelor.`,
);
for (var i = 0; i < person.friends.length; i++) {
  var sumPersons;
  sumPersons =
    2022 -
    person.friends[0].age +
    (2022 - person.friends[1].age) +
    (2022 - person.friends[2].age);
}
console.log(sumPersons.toString());

console.warn(
  `6. Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul
  friends doar daca aceasta este mai mare de 2 ani.`,
);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }
}

console.warn(`7. Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar
daca varsta prietenului este impara.`);
var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendAge = friend.age;
  var difference = person.age - friendAge;

  if (friendAge % 2 !== 0) {
    console.log(
      'Intre ' +
        person.name +
        ' si ' +
        friend.name +
        ' este o diferenta de ' +
        difference +
        ' ani.',
    );
  }
}

console.warn(
  `8. Folosind proprietatea length a arrayului skills si o bucla for,
  afiseaza in ordine inversa elementele arrayului skills. Atentie,
  va trebui sa numeri invers, de la length la 0.`,
);
for (var i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(
  `9. Folosind obiectul person si un for, afiseaza in consola
  skillurile pe care le are persoana `,
);

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];
  console.log(skill);
}

console.warn('10. In mod similar, afiseaza skillurile care incep cu c');
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill.startsWith('c') === true) {
    console.log(skill);
  }
}

console.warn(
  '11. Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."',
);
var message = 'Numele de familie ale prietenilor mei sunt: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  message = message + friend.surname + punctuation;
}
console.log(message);

console.warn(
  '12. Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends',
);
var sum = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendAge = friend.age;
  sum += friendAge;
}
console.log(sum.toString());

console.warn(
  '13. Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends. ',
);
for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  var ageDifference = Math.abs(person.age - friend.age);

  console.log(ageDifference);
}

console.warn(
  '14. Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.',
);
var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var friendAge = friend.age;
  var diff = person.age - friendAge;

  if (i == person.friends.length - 1) {
    punctuation = '.';
  }

  message =
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    diff +
    ' ani' +
    punctuation;
  console.log(message);
}

console.warn(
  '15. Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.” in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).',
);
var message = 'Prietenii mei sunt: ';
var punctuation = ', ';

for (var i = person.friends.length - 1; i >= 0; i--) {
  var friend = person.friends[i];
  if (i === 0) {
    punctuation = '.';
  }
  message += friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);
