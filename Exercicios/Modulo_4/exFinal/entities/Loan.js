const Installment = require("./Installment")

module.exports = class Loan {
  static #interestRate = 1.05

  constructor(value, NumberInstallments) {
    this.value = value
    this.criationDate = new Date()
    this.installments = []

    for (i = 0; i <= NumberInstallments; i++) {
      this.installments.push(new Installment( (this.value * Loan.#interestRate) / NumberInstallments, i ))
    }
  }

  static get readRate() {
    return Loan.#interestRate
  }
  
  static set newRate(rate) {
    Loan.#interestRate = 1 + (rate / 100)
  }
}