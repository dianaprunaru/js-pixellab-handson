class Car {
  constructor(positionX, positionY, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.color = color;

    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;

    this.car = document.createElement('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = document.createElement('div');
    this.carTop.classList.add('car__top');
    this.car.append(this.carTop);

    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    this.car.append(this.carBody);

    this.lightBack = document.createElement('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    this.lightFront = document.createElement('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);
    this.hubCapFront = document.createElement('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);

    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.hubCapBack = document.createElement('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);
  }

  moveTo(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.frame.style.left = `${this.positionX}px`;
    this.frame.style.top = `${this.positionY}px`;
  }

  engageBreak() {
    this.lightBack.style.backgroundColor = 'red';
  }

  disengageBreak() {
    this.lightBack.style.backgroundColor = 'white';
  }

  changeCapColor() {
    this.hubCapBack.style.backgroundColor = 'green';
    this.hubCapFront.style.backgroundColor = 'green';
  }

  changeTireColor() {
    this.wheelBack.style.backgroundColor = 'magenta';
    this.wheelFront.style.backgroundColor = 'magenta';
  }

  areHazardsOn = false;
  turnHazardsOn() {
    this.areHazardsOn = true;
    this.lightBack.style.backgroundColor = 'yellow';
    this.lightFront.style.backgroundColor = 'yellow';
  }

  turnHazardsOff() {
    this.areHazardsOn = false;
    this.lightBack.style.backgroundColor = 'white';
    this.lightFront.style.backgroundColor = 'white';
  }

  toggleHazards() {
    this.turnHazardsOn();

    setInterval(() => {
      this.turnHazardsOff();
    }, 500);
  }

  render() {
    document.body.append(this.frame);
  }
}

const car01 = new Car(140, 140, 'teal');
car01.render();
car01.moveTo(250, 250);

const car02 = new Car(100, 100, 'red');
car02.changeCapColor('green');
car02.changeTireColor('magenta');
car02.render();
car02.moveTo(400, 400);
