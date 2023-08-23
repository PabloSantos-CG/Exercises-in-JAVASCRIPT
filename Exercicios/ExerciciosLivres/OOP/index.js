const LibrariesSet = require("./LibrariesSet");
const Library = require("./Library");

const library = new Library()



library.addNewBook('Zé', 'Café ta caro', 200)
const librariesSet = new LibrariesSet()
librariesSet.addLibraries('Biblioteca UCSal', '(41) 99916-2141', '9h às 18h', 'Rua Coronel Teixeira', '42700-115', 'Salvador', 'Bahia')

const result = librariesSet.Bibliotecas

console.log(result)

// librariesSet.addLibrarys('Biblioteca PUC', '(75) 99916-2141', '9h às 13', 'Rua Pinheiro Martins', '42000-015', 'Camaçari', 'Bahia')

// console.log(result)