const Address = require("./Address")
const { randomUUID } = require("node:crypto")

class Library {
  constructor ({id, nameLibrary, phoneNumber, openingHours, road, cep, city, state}) {
    this.id = id
    this.name = nameLibrary
    this.books = []
    this.phoneNumber = phoneNumber
    this.openingHours = openingHours
    this.address = new Address(road, cep, city, state)
  }


  addNewBook(author, title, pages) {
    const newBook = {
      id: randomUUID(),
      author,
      title,
      pages
    }

    this.books.push(newBook)
  }
}

module.exports = Library