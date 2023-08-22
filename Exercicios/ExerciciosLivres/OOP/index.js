const LibrariesSet = require("./LibrariesSet");

const librariesSet = new LibrariesSet()

const bibliotecas = librariesSet.Bibliotecas

librariesSet.addLibrarys('Biblioteca UCSal', '(41) 99916-2141', '9h às 18h', 'Rua Coronel Teixeira', '42700-115', 'Salvador', 'Bahia')

librariesSet.addLibrarys('Biblioteca PUC', '(75) 99916-2141', '9h às 13', 'Rua Pinheiro Martins', '42000-015', 'Camaçari', 'Bahia')

console.log(bibliotecas)