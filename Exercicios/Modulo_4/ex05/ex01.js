class Vehicle {
  constructor (model, mark, year) {
    this.model = model
    this.mark = mark
    this.year = year
  }

  details() {
    console.log('\n', this.mark, this.model, this.year)
  }
}

class Motorcycle extends Vehicle {
  constructor (cc, model, mark, year) {
    super(model, mark, year)
    this.engineCapacity = cc
  }

  speedUp() {
    this.details()
    console.log(`\nEstamos ligando sua ${this.model} ${this.engineCapacity}`)
  }
}

class Car extends Vehicle {
  constructor (ports, model, mark, year) {
    super(model, mark, year)
    this.ports = ports
  }

  startCar() {
    this.details()
    console.log(`\nSeu ${this.mark} - ${this.model} possui ${this.ports} portas e ele está ligado!`)
  }
}




const motorcycle = new Motorcycle('250cc', 'Next', 'Dafra', 2013)
motorcycle.speedUp()

const car = new Car(3, 'Veloster', 'Hyundai', 2010)
car.startCar()