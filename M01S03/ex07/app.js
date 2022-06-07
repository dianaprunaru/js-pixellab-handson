var person = {
  firstName: 'Ileana',
  lastName: 'Sima',
  email: 'ileana.sima@gmail.com',
  birthYear: 1964,
  zipCode: '030077',
  pets: [
    {
      name: 'Lolo',
      species: 'pisica',
      age: 13,
    },
    {
      name: 'Medousa',
      species: 'sarpe',
      age: 320,
    },
    {
      name: 'Waterloo',
      species: 'papagal',
      age: 5,
    },
  ],
};

var difference = (2022 - person.birthYear - person.pets[0]).toString();
var petName = person.pets[0].name;

console.warn(
  `Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets. `,
);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  'Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”',
);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.`,
);
console.log((2022 - person.pets[2].age).toString());

// Aici nu mai stiu cum se face
console.warn(`Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.
`);
console.log(difference);

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

console.warn(
  `Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)`,
);

console.warn(
  `Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 `,
);

console.warn(
  `Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”`,
);
console.log(
  'Ma numesc ' +
    person.firstName +
    ' ' +
    person.lastName +
    ', m-am nascut in ' +
    person.birthYear +
    ' si codul meu postal este: ' +
    person.zipCode,
);
