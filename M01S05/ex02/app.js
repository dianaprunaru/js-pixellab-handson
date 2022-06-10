function calculateRectangleArea(L, l) {
  return L * l;
}

// Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.
const anotherSquare = calculateRectangleArea(8, 8);
console.log(anotherSquare);

console.warn(
  `Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9`,
);
console.log(calculateRectangleArea(12, 9));
