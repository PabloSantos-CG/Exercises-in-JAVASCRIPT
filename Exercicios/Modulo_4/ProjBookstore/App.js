const Database = require("./Database")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Posters = require("./entities/Posters")
const User = require("./entities/User")

module.exports = class App {
  static #database = new Database()

  //cria um usuário e no próximo método ele mostra o array de usuários
  createUser(username, password, email) {
    const user = new User(username, password, email)
    App.#database.saveUser(user)
  }

  getUsers() {
    return App.#database.search('users')
  }

    //cria um author e no próximo método ele mostra o array de authors
  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio)
    App.#database.saveAuthors(author)
  }

  getAuthors() {
    return App.#database.search('authors')
  }

  createBook(title, synopsis, genre, pages, author, description, price, inStock) {
    const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
    App.#database.saveBooks(book)
  }

  addBook(nameBook, quantity) {
    App.#database.addBooksToStock(nameBook, quantity)
  }

  getBooks() {
    return App.#database.search('books')
  }

  createPoster(name, description, height, width, price, inStock) {
    const poster = new Posters(name, description, height, width, price, inStock)
    App.#database.savePoster(poster)
  }

  addPoster(namePoster, quantity) {
    App.#database.addPostersToStock(namePoster, quantity)
  }

  getPosters() {
    return App.#database.search('posters')
  }

  createOrder(items, user) {
    const order = new Order(items, user)
    App.#database.saveOrder(order)
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        App.#database.removeBooksFromStock(product.name, quantity)
      } else if (product instanceof Poster) {
        App.#database.removePostersFromStock(product.name, quantity)
      }
    })
  }

  getOrders() {
    return App.#database.find('orders')
  }

  showDatabase() {
    App.#database.showStorage()
  }
}