const Installment = require("./Installment")

module.exports = class Loan {
  static #interestRate = 1.05

  constructor(value, NumbersInstallments) {
    this.value = value
    this.installments = []
    this.criationDate = new Date()

    for (i = 0; i <= NumbersInstallments; i++) {
      this.installments.push(new Installment( (this.value * Loan.#interestRate) / NumbersInstallments, i ))
    }
  }

  static get readRate() {
    return Loan.#interestRate
  }
  
  static set newRate(rate) {
    Loan.#interestRate = 1 + (rate / 100)
  }
}