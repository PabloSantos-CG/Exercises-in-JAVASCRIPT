const Library = require("./Library")

class LibrariesSet {
    constructor() {
        this.Bibliotecas = []
    }

    addLibraries({id, nameLibrary, phoneNumber, openingHours, road, cep, city, state}) {
        const library = new Library({
            id,
            cep,
            city,
            nameLibrary,
            openingHours,
            phoneNumber,
            road,
            state,
        })

        this.Bibliotecas.push(library)
    }

    addBookInLibary({id, author, title, pages}) {
        const library = this.Bibliotecas.find(library => library.id === id)
        library.addNewBook(author, title, pages)

        console.log(library)
    }

}

module.exports = LibrariesSet