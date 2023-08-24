const LibrariesSet = require("./Libraries")

const librariesSet = new LibrariesSet()

const arr = [{
    id: 0,
    cep: "12345678",
    city: "São Paulo",
    nameLibrary: "Biblioteca Municipal",
    openingHours: "08:00 - 18:00",
    phoneNumber: "123456789",
    road: "Rua dos Bobos",
    state: "SP",
},

{
    nameLibrary: "Biblioteca Santo antonio",
    id: 1,
    city: "São Paulo",
    cep: "12345678",
    openingHours: "08:00 - 18:00",
    phoneNumber: "123456789",
    road: "Rua dos Bobos",
    state: "SP",

}]

librariesSet.addLibraries(...arr)

librariesSet.addBookInLibary({
    id: 0,
    title: "O Senhor dos Anéis",
    author: "J. R. R. Tolkien",
    pages: 1000,
})

librariesSet.addBookInLibary({
    id: 1,
    title: "Guardiões da Galáxia",
    author: "Dan Abnett",
    pages: 1000,
})