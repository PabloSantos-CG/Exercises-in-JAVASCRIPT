module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: []
  }

  search(key) {
    return this.#storage[key]
  }

  saveAuthors(author) {
    this.#storage.authors.push(author)
  }

  findBookName(bookName) {
    return this.#storage.books.find( value => value.name === bookName)
  }

  saveBooks(book) {
    const returnBook = this.findBookName(book.name)
    if(!returnBook) {
      this.#storage.books.push(book)
    }
  }

  addBooksToStock(bookName, quantity) {
    const book = this.findBookName(bookName)
    book?.addToStock(quantity)
  }

  removeBooksFromStock(bookName, quantity) {
    const book = this.findBookName(bookName)
    book?.removeToStock(quantity)
  }

  findPosterName(posterName) {
    return this.#storage.posters.find( value => value.name === posterName)
  }

  savePoster(poster) {
    const returnPoster = this.findPosterName(poster.name)
    if(!returnPoster) {
      this.#storage.posters.push(poster)
    }
  }

  addPostersToStock(posterName, quantity) {
    const poster = this.findPosterName(posterName)
    poster?.addToStock(quantity)
  }

  removePostersFromStock(posterName, quantity) {
    const poster = this.findPosterName(posterName)
    poster?.removeToStock(quantity)
  }

  saveUser(user) {
    const userExist = this.#storage.users.find( value => value.email === user.email)
    if(!userExist) {
      this.#storage.users.push(user)
    }
  }

  saveOrder(order) {
    this.#storage.orders.push(order)
  }

  showStorage() {
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(order => order.data))
  }
  
}