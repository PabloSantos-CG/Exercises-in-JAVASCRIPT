class Address {
  constructor (road, cep, houseNumber, city, state) {
    this.road = road
    this.cep = cep
    this.houseNumber = houseNumber
    this.city = city
    this.state = state
  }

  fullAddress () {
    return `Rua: ${this.road}, Cep: ${this.cep}, Número da casa: ${this.houseNumber}, Cidade: ${this.city}, Estado: ${this.state}`
  }
}

module.exports = Address