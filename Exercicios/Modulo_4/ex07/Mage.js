const Character = require("./Character");

class Mage extends Character {
  constructor(name, healthPoints, attackPoints, defensePoints, magic) {
    super(name, healthPoints, attackPoints, defensePoints)

    this.magic = magic
  }

  attack(param) {
    param.healthPoints -= (this.attackPoints + this.magic) - param.defensePoints
  }

  healingMagic(param) {
  param.healthPoints += this.magic * 2
  }
}

module.exports = Mage