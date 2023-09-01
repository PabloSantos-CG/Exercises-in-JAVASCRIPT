module.exports = class Account {
  static #balance = 0

  constructor(user) {
    this.user = user
    this.deposits = []
    this.loans = []
    this.transfers = []
  }

  
  static get showBalance() {
    return Account.#balance
  }

  newDeposit(deposit) {
    Account.#balance += deposit.value
    this.deposits.push(deposit)
  }

  newLoan(loan) {
    Account.#balance += loan.value
    this.loans.push(loan)
  }

  newTransfer(transfer) {
    if(transfer.toUser.email === this.user.email) {
      this.#balance += transfer.value
      this.transfers.push(transfer)
    } else if(transfer.fromUser.email === this.user.email) {
      this.#balance -= transfer.value
      this.transfers.push(transfer)
    }
  }
}