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
  `1. Folosind obiectul person si forEach, afiseaza skillurile
  din pozitiile impare ale arrayului.`,
);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(
  `2. In mod similar, afiseaza skillurile care
contin litera a.`,
);

person.skills.forEach(function (skill) {
  if (skill.includes('a') === true) {
    console.log(skill);
  }
});

console.warn(
  `3. Folosind forEach afiseaza propozitia: "Prietenii mei se
numesc xxx yyy, xxx yyy si xxx yyy."`,
);

var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index) {
  var punctuation = ', ';

  if (person.friends.length - 1 === index) {
    punctuation = '.';
  }
  message += friend.name + ' ' + friend.surname + punctuation;
});
console.log(message);

console.warn(
  `4. Folosind forEach, afiseaza numarul total de ani pe care il au
  persoanele din arrayul friends, doar daca au varsta mai mare
  decat 30 inclusiv.`,
);
var sumYears = 0;
person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    sumYears += friend.age;
  }
});
console.log(sumYears);

console.warn(
  `5. Folosind forEach, afiseaza suma anilor de nastere ai persoanelor
  care au varsta impara. `,
);
var sumYearsOddAge = 0;
person.friends.forEach(function (friend) {
  var birthYear = 2022 - friend.age;
  if (friend.age % 2 !== 0) {
    sumYearsOddAge += birthYear;
  }
});
console.log(sumYearsOddAge);

console.warn(
  `6. Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul
  friends daca aceasta este mai mare sau egala cu 2 ani.`,
);
var ageDiff = 0;
person.friends.forEach(function (friend) {
  if (ageDiff >= 2) {
    ageDiff = Math.abs(person.age - friend.age);
  }
});
console.log(ageDiff);

console.warn(
  `7. Afiseaza fraza: "Intre Dragos si Larry este o diferenta
  de xx ani. Intre Dragos si Steven... "`,
);
var message = ' ';
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);

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
  `8. Folosind metoda reverse si apoi forEach, afiseaza in
  ordine inversa elementele arrayului skills.`,
);
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

console.warn(
  `9. Folosind obiectul person si forEach, afiseaza in consola
  skillurile pe care le are persoana.`,
);
person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(`10. In mod similar, afiseaza skillurile care nu incep cu j.`);
person.skills.forEach(function (skill) {
  if (skill.startsWith('j') === false) {
    console.log(skill);
  }
});

console.warn(`11. Folosind forEach afiseaza propozitia:
"Numele mari ale prietenilor mei sunt xxx, xxx, xxx."`);
var message = 'Numele mari ale prietenilor mei sunt ';
person.friends.forEach(function (friend, index) {
  var punctuation = ', ';

  if (person.friends.length - 1 === index) {
    var punctuation = '.';
  }
  message += friend.surname + punctuation;
});
console.log(message);

console.warn(`12. Folosind forEach, afiseaza numarul total de ani
pe care il au persoanele din arrayul friends`);
var sumAge = 0;
person.friends.forEach(function (friend) {
  sumAge += friend.age;
});
console.log(sumAge);

console.warn(
  `13. Folosind forEach, afiseaza suma anilor de nastere a persoanelor`,
);
var sumBirthYears = 0;
person.friends.forEach(function (friend) {
  var birthYear = 2022 - friend.age;
  sumBirthYears += birthYear;
});
console.log(sumBirthYears.toString());

console.warn(
  `14. Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`,
);
var ageDifference = ' ';
person.friends.forEach(function (friend) {
  ageDifference = person.age - friend.age;
  console.log(ageDifference);
});

console.warn(
  `15. Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.`,
);
person.friends
  .slice()
  .reverse()
  .forEach(function (friend) {
    console.log(friend.name + ' ' + friend.surname);
  });
