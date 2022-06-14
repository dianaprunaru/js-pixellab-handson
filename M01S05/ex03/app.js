const calculateRectangleArea = function (L, l) {
  const surface = L * l;

  return surface;
};

console.warn(
  `1. Stiind ca un camp dreptunghiular de hamei produce 25kg/m2,
  ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?`,
);
const yield = 25;

const field01Surface = calculateRectangleArea(100, 250);
const field02Surface = calculateRectangleArea(350, 200);
const field01Yield = field01Surface * yield;
const field02Yield = field02Surface * yield;

console.log(field02Yield - field01Yield);

console.warn(
  `2. Stiind ca din 10kg de hamei produc 2.5l de bere,
  cati litri de bere va produce un teren de 400m pe 370m?`,
);
const beerYield = 2.5 / 10;
const field03Surface = calculateRectangleArea(400, 370);
const field03Yield = yield * field03Surface;

console.log(beerYield * field03Yield);

console.warn(
  `3. Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina.
  Afla si afiseaza cate kilograme de paine produce un camp de 300 pe 200
  metri stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.`,
);
const field04Surface = calculateRectangleArea(300, 200);
