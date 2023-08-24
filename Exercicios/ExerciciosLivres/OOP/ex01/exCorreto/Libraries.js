const Library = require("./Library") 

class LibrariesSet {
    constructor() {
        this.Bibliotecas = []
    }

    addLibraries(...libraries) {
        libraries.forEach( (library) => this.Bibliotecas.push(new Library(library)))
    }

    addBookInLibary({id, author, title, pages}) {
        const library = this.Bibliotecas.find(library => library.id === id)
        library.addNewBook(author, title, pages)

        console.log(library)
    }

}

module.exports = LibrariesSet