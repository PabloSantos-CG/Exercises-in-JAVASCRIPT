/*module.exports =*/ class Account {
  static #balance

  constructor() {
    this.#balance = 0
    this.deposit = []
    this.loans = []
    this.transfers = []
  }

  
  static get showBalance() {
    return Account.#balance
  }
}
