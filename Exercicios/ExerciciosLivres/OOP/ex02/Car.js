class Car {
  constructor (make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }

  startTheCar() {
    return 'O carro está ligado!'
  }
}

module.exports = Car