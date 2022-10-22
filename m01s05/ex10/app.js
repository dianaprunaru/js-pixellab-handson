function calculateSurface(L, l) {
  const argumentsCount = arguments.length;

  if (argumentsCount === 2) {
    return L * l;
  }

  if (argumentsCount === 1) {
    return L ** 2;
  }

  console.warn('Invalid signature');
}

const calculateSquareSurface = (length) => {
  const surface = calculateSurface(length);

  return surface;
};

console.log(calculateSquareSurface(4));

console.warn(
  `3. Creeaza un wrapper numit calculateRectangleSurface()
  pentru calculateSurface() care sa primeasca doi parametri
  si sa calculeze suprafata unui dreptunghi. `,
);
const calculateRectangleSurface = (length, width) => {
  const surface = calculateSurface(length, width);
  return surface;
};
console.log(calculateRectangleSurface(8, 9));
