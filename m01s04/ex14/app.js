var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `1. Afiseaza in consola folosind metoda forEach() numele fiecarui animal.`,
);
Object.keys(person.pets).forEach(function (petName) {
  var pet = person.pets[petName];

  console.log(`${pet.name}`);
});

console.warn(`2. Folosind o bucla for afiseaza suma anilor animalelor.`);
var sum = 0;
for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];

  sum += pet.age;
}
console.log(sum);

console.warn(
  `3. Folosind forEach() afiseaza cate una pe linie propozitiile:
  “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);

Object.keys(person.pets).forEach(function (petName) {
  var pet = person.pets[petName];

  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(
  `4. Folosind o bucla for afiseaza cate una pe linie
  propozitiile: “Intre Dragos si Twix este o diferenta
  de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`,
);
Object.keys(person.pets).forEach(function (petName) {
  var pet = person.pets[petName];
  var ageDiff = Math.abs(2022 - person.birthYear - pet.age);

  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani.`,
  );
});

console.warn(
  `5. Folosind o bucla for afiseaza in ordine inversa
  numele animalelor din array sub forma de propozitii:
  “Animalul meu se numeste xxxx.”.`,
);
Object.keys(person.pets)
  .reverse()
  .forEach(function (petName) {
    var pet = person.pets[petName];

    console.log(`Animalul meu se numeste ${pet.name}`);
  });

console.warn(
  `6. Folosind o bucla for afla care este cel mai in varsta
  animal si afiseaza propozitia: “xxx este cel mai batran
  animal pe care il am, dar intre noi este o diferenta de xx ani.”`,
);
for (var i = 0; i < person.pets.length; i++) {
  var pet = person.pets[i];
  var oldest = Math.max(pet.age);
  var ageDiff02 = Math.abs(2022 - person.birthYear - oldest);
}
console.log(
  `${pet.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff02} ani.`,
);

console.warn(`7. Folosind o bucla forEach afiseaza propozitia:
“Am papagal, caine, hamster si pisica.”`);
var message = 'Am ';
Object.keys(person.pets).forEach(function (petName, index, petSpecies) {
  var pet = person.pets[petName];

  var punctuation = ', ';
  var petsCount = petSpecies.length;

  if (petsCount - 2 === index) {
    punctuation = ' si ';
  }

  if (petSpecies.length - 1 === index) {
    punctuation = '.';
  }

  message += `${pet.species}${punctuation}`;
});
console.log(message);
