class Vehicle {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = 50,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    // this.speed = this.setSpeed(speed);
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      this.displaySpeed();
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      this.displaySpeed();
      return;
    }

    this.speed = speed;

    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }
}
const bike = new Bicycle('Pegas', 'red', 8, 20);

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 3, speed, topSpeed, 0);
  }
}
const trike = new Tricycle('Tryke', 'red', 2, -2, 9);

// Creeaza o masina noua (marca Audi, culoare blue, viteza curenta 3, viteza maxima 140, viteza minima -50).
// Seteaza viteza noii instante la 140, apoi ruleaza metoda accelerate(), ce observi?

const car = new Car('Audi', 'blue', 140, 140, -50);
