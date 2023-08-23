const Library = require("./Library")

class LibrariesSet {
  constructor () {
    this.Bibliotecas = []
  }

  addLibraries(nameLibrary, phoneNumber, openingHours, road, cep, city, state) {
    const library = new Library(nameLibrary, phoneNumber, openingHours, road, cep, city, state)
    
    this.Bibliotecas.push(library)
  }
  
}

module.exports = LibrariesSet