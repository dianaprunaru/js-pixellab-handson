class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed++;

    return this;
  }

  decelerate() {
    this.speed--;
  }
}

var audi = new Car('Audi', 'black', 4, 50);

audi.accelerate().accelerate().accelerate().accelerate();

console.log;

const carInstance = (targetSelector = 'message', message) => {
  let element = document.querySelector(targetSelector);

  if (element === null) {
    element = document.createElement('p');
    element.classList.add(targetSelector.replace('.', ''));
    document.body.append(element);
  }

  element.innerText = message;
};

// carInstance.displaySpeed();
// carInstance.displaySpeed()
// - scoate din DOM un paragraf (dupa id, dupa clasa, wtv)
// - verifica daca e null
// - daca e null, il creaza (createElement)
// - daca nu e null, ii seteaza innerText = this.speed;
