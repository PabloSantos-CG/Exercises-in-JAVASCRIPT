const LibrariesSet = require("./Libraries")

const librariesSet = new LibrariesSet()

librariesSet.addLibraries({
    id: 0,
    cep: "12345678",
    city: "São Paulo",
    nameLibrary: "Biblioteca Municipal",
    openingHours: "08:00 - 18:00",
    phoneNumber: "123456789",
    road: "Rua dos Bobos",
    state: "SP",
})

librariesSet.addLibraries({
    id: 1,
    cep: "12345678",
    city: "São Paulo",
    nameLibrary: "Biblioteca Santo antonio",
    openingHours: "08:00 - 18:00",
    phoneNumber: "123456789",
    road: "Rua dos Bobos",
    state: "SP",

})

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