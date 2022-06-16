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

const flour = 32;
const flourFieldSurface = calculateRectangleArea(300, 200);
const flourProduction = flourFieldSurface * flour;
const bread = flourProduction / 2.5;

console.log(bread);

console.warn(`4. Dar doua campuri de 150 pe 200 si 500 pe 300 in total?`);
const flourField02Surface = calculateRectangleArea(150, 200);
const flourProduction02 = flourField02Surface * flour;
const bread02 = flourProduction02 / 2.5;

const flourField03Surface = calculateRectangleArea(500, 300);
const flourProduction03 = flourField03Surface * flour;
const bread03 = flourProduction03 / 2.5;

console.log(bread02 + bread03);

// Nu imi dau seama ce gresesc aici, ca pixeltabul nu se inverzeste.
