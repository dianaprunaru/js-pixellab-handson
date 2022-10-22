const dateBuilder = [
  function () {
    return '2022';
  },
  function () {
    return 'iunie';
  },
  function () {
    return '24';
  },
];

dateBuilder[3] = function () {
  return 'duminica';
};

console.warn(`1. Folosind arrayul dateBuilder, afiseaza luna curenta.`);
console.log(dateBuilder[1]());

console.warn(`2. Afiseaza propozitia: “Suntem in anul an.”.`);
console.log(`Suntem in anul ${dateBuilder[0]()}.`);

console.warn(`
3. Afiseaza propozitia: “Suntem in luna ll in anul aa.”.
`);
console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);

console.warn(`4. Afiseaza propozitia: “Astazi este zz.”.`);
console.log(`Astazi este ${dateBuilder[1]()}.`);

console.warn(`5. Folosind arrayul dateBuilder, afiseaza anul curent.`);
console.log(dateBuilder[0]());

console.warn(`6. Afiseaza propozitia: “Suntem in luna an.”.`);
console.log(`Suntem in ${dateBuilder[1]()} ${dateBuilder[0]()}.`);

console.warn(`7. Afiseaza propozitia: “Astazi este zi, data.”.`);
console.log(`Astazi este ${dateBuilder[3]()}, ${dateBuilder[2]()}.`);

console.warn(`8. Afiseaza propozitia: “Data curenta este zi luna an.”.`);
console.log(
  `Data curenta este ${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}.`,
);
