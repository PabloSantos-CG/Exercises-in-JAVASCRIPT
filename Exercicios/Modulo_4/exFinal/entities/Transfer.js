const Deposit = require("./Deposit")

module.exports = class Transfer extends Deposit{
  constructor(userSubmit, userReceive, value) {
    super(value)
    this.#userSubmit = userSubmit
    this.#userReceive = userReceive
    this.criationDate = new Date()
  }
}