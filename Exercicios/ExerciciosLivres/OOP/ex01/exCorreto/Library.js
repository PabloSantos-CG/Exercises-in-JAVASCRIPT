const Address = require("./Address")

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
      Id: Math.floor(Math.random() * 9999),
      Author: author,
      Title: title,
      Pages: pages
    }

    this.books.push(newBook)
  }
}

module.exports = Library