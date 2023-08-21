// const Address = require("./address");
const Person = require("./person");

// const address = new Address()

const person = new Person('Pablo Santos', 'Canabrava joel de martins', '49100-700', 'nº 581', 'Salvador', 'Bahia')

console.log(person, person.address.fullAddress())