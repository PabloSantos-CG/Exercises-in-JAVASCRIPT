const Deposit = require("./Deposit")

module.exports = class Transfer extends Deposit{
  constructor(fromUser, toUser, value) {
    super(value)
    this.fromUser = fromUser
    this.toUser = toUser
    this.criationDate = new Date()
  }
}