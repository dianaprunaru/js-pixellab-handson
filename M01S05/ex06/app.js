const person = {
  getName: function () {
    return 'Diana Prunaru';
  },
  getAge: function () {
    return 31;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  // return person.getName
  // return person.getAge
  return person[methodName]();
}

console.warn(
  `1. Folosind accesorul salveaza numele mic al persoanei
  intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”`,
);

const personFirstName = accessor('Name');
console.log(`Eu sunt ${personFirstName}.`);

console.warn(`2. Afiseaza anul de nastere al persoanei folosind anul curent.`);
const currentYear = new Date().getFullYear();
const personBirthYear = currentYear - accessor('Age');
console.log(personBirthYear.toString());

console.warn(
  `3. Afiseaza propozitia “Ma numesc xxx yyy, am aa ani si
  m-am nascut in anul aaaa.”`,
);
console.log(
  `Ma numesc ${accessor('Name')}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${personBirthYear}.`,
);

console.warn(`4. Folosind accesorul afiseaza numele persoanei.`);
console.log(accessor('Name'));

console.warn(`5. Afiseaza varsta persoanei.`);
console.log(accessor('Age'));

console.warn(
  `6. Afiseaza anul de nastere al persoanei folosind anul curent.
  Intr-o propozitie de forma “M-am nascut in 1987.”`,
);
console.log(`M-am nascut in ${personBirthYear}.`);

console.warn(`7. Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”`);
console.log(`Ma numesc ${accessor('Name')} si am ${accessor('Age')} ani!`);
