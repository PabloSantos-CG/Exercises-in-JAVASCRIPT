const Address = require("./address")

class Person {
  constructor (name, road, cep, houseNumber, city, state) {
    this.name = name
    this.address = new Address(road, cep, houseNumber, city, state)
  }
}

module.exports = Person