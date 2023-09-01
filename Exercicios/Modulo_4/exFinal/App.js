const Loan = require("./entities/Loan")
const Transfer = require("./entities/Transfer")
const User = require("./entities/User")

module.exports = class App {
  static #users = []

  static search(email) {
    const user = this.#users.find(user => user.email === email)
    return user ?? null
  }

  static createUse(email, fullName) {
    const userTrue = App.search(email)
    if(!userTrue) {
      this.#users.push(new User(fullName, email))
    }
  }

  static deposit(email, value) {
    const user = App.search(email)
    if(user) {
      user.account.newDeposit(value)
    }
  }

  static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.search(fromUserEmail)
    const toUser = App.search(toUserEmail)
    if(fromUser && toUser) {
      const transfer = new Transfer(fromUser, toUser, value)

      fromUser.account.newTransfer(transfer)
      toUser.account.newTransfer(transfer)
    }
  }

  static newLoan(email, value, NumbersInstallments) {
    const user = App.search(email)
    if(user) {
      const loan = new Loan(value, NumbersInstallments)
      user.account.newLoan(loan)
    }
  }

  static newFee(fee) {
    Loan
  }
}