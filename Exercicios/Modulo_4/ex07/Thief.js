const Character = require("./Character");

class Thief extends Character { 
  attack(param) {
    param.healthPoints -= (this.attackPoints - param.defensePoints) * 2
  }
}

module.exports = Thief