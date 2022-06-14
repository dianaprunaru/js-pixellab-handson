function calculateRectangleArea(L, l) {
  return L * l;
}

console.warn(
  `1. Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 4 pe 3`,
);
console.log(calculateRectangleArea(4, 3));

console.warn(
  `2. Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.`,
);
const firstRectangle = calculateRectangleArea(5, 3);
const secondRectangle = calculateRectangleArea(3, 2);
const totalSurface = firstRectangle + secondRectangle;
console.log(totalSurface);

console.warn(
  `3. Calculeaza intr-o variabila numita squareSurface aria
  unui patrat de 3 pe 3.`,
);
const squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);

console.warn(
  `4. Folosind functia calculateRectangleArea() afiseaza suprafata unui dreptunghi de 12 pe 9`,
);
console.log(calculateRectangleArea(12, 9));

console.warn(
  `5. Afiseaza suprafata totala a trei dreptunghiuri de 15 pe 31,  8 pe 9, respectiv 10 pe 5. Foloseste variabile.`,
);
const firstRectangleArea = calculateRectangleArea(15, 31);
const secondRectangleArea = calculateRectangleArea(8, 9);
const thirdRectangleArea = calculateRectangleArea(10, 5);
const totalRectanglesSurface =
  firstRectangleArea + secondRectangleArea + thirdRectangleArea;
console.log(totalRectanglesSurface);

console.warn(
  `6. Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.`,
);
const anotherSquare = calculateRectangleArea(8, 8);
console.log(anotherSquare);
