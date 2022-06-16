console.warn(
  `1. Creeaza o functie overloaded pentru calcularea suprafetelor
  numita calculateSurface. Daca primeste un parametru, sa
  calculeze suprafata unui patrat. Daca primeste doi, a unui
  dreptunghi. Daca primeste trei, sa calculeze suprafata totala
  a paralelipipedului. (Foloseste structura switch).`,
);

function calculateSurface(L, l, h) {
  const argumentsCount = arguments.length;

  if (argumentsCount === 1) {
    return L ** 2;
  }

  if (argumentsCount === 2) {
    return L * l;
  }

  if (argumentsCount === 3) {
    return L * l * h;
  }
}

const parallelipipedSurface = (L, l, h) => {
  const parallelipipedSurface = calculateSurface(L, l, h);

  return parallelipipedSurface;
};
console.log(parallelipipedSurface(20, 15, 5));
// Nu stiu ce vrea Pixeltabul de la mine aici :)))

console.warn(
  `2. Creeaza o functie numita calculateCircleArea() si
  afiseaza suprafata unor cercuri cu raza de 2, 20 si 16. `,
);
function calculateCircleArea(R) {
  return Math.PI * R * R;
}

const firstCircleArea = calculateCircleArea(2);
console.log(firstCircleArea);

const secondCircleArea = calculateCircleArea(20);
console.log(secondCircleArea);

const thirdCircleArea = calculateCircleArea(16);
console.log(thirdCircleArea);

console.warn(`3. Creeaza un obiect numit pet cu urmatoarele
metode: getName, getSpecies si getAge.
a. Folosind metodele obiectului pet afiseaza propozitia:
“nnnn este ssss si are aaaa ani.”
b. Folosind metoda getAge calculeaza si salveaza intr-o
variabila numita petAge varsta animalului si afiseaza
propozitia: “Animalul meu are petAge ani”
`);

var pet = {
  getName: function () {
    return 'Blue';
  },
  getSpecies: function () {
    return 'pisoi';
  },
  getAge: function () {
    return 4;
  },
};

function accessor(methodSuffix) {
  var methodName = 'get' + methodSuffix;
  return pet[methodName]();
}

var petName = accessor('Name');
var petSpecies = accessor('Species');
var petAge = accessor('Age');

console.log(`${petName} este ${petSpecies} si are ${petAge} ani.`);

console.log(`Animalul meu are ${petAge} ani.`);
