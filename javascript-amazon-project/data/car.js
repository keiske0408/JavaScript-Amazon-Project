class Car {
  
  #brand;
  #model;
  speed = 0;
  isTrunkOpen;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    console.log(`${this.#brand} ${this.#model} 
  speed: ${this.speed} 
  isTrunkOpen: ${this.isTrunkOpen}`);
  }

  go() {
    if (this.isTrunkOpen === true) {
      alert("trunk is open, cannot Go");
      return;
    }

    if (this.speed >= 200) {
      alert("Overspeeding! Stopping...");
      this.speed = 0;
    } else {
      this.speed += 5;
    }
  }

  brake() {
    if (this.speed <= 0) {
      alert("superslow");
      this.speed = 0;
    } else {
      this.speed -= 5;
    }
  }

  openTrunk() {
    this.speed > 0
      ? alert("cannot open trunk, car is moving")
      : (this.isTrunkOpen = true);
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails){
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go(){
    this.speed += this.acceleration

    if(this.speed > 300){
      this.speed = 300;
    }
  }

  openTrunk(){
    console.log('Race cars do not have a trunk.');
  }

  closeTrunk(){
    console.log('Race cars do not have a trunk.');
  }
}

const car1 = new Car({
  brand: "Toyota",
  model: "Corolla",
});

const car2 = new Car({
  brand: "Tesla",
  model: "#model 3",
});


const supercar1 = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration:20
})

supercar1.go()
supercar1.displayInfo();

car2.displayInfo();

supercar1.go();
supercar1.go();
supercar1.go();
supercar1.displayInfo();
supercar1.openTrunk();
supercar1.displayInfo();
supercar1.brake();
supercar1.displayInfo();

supercar1.brand = 'gas'
supercar1.displayInfo();



