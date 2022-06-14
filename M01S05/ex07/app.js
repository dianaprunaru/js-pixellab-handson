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

console.warn(`
3. Afiseaza propozitia: “Suntem in luna ll in anul aa.”.
`);
console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);

console.warn(`4. Afiseaza propozitia: “Astazi este zz.”.`);
console.log(`Astazi este ${dateBuilder[1]()}.`);
