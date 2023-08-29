const Character = require("./Character");

class Warrior extends Character {
  constructor(name, healthPoints, attackPoints, defensePoints, shieldPoints) {
    super(name, healthPoints, attackPoints, defensePoints)

    this.shieldPoints = shieldPoints
    this.position = 'Ataque'
  }

  attack(param) {
    if(this.position === 'Ataque') {
      super.attack(param)
    }
  }

  changePosition() {
    if(this.position === 'Ataque') {
      this.position = 'Defesa'
      this.defensePoints += this.shieldPoints
      
    } else {
      this.position = 'Ataque'
      this.defensePoints -= this.shieldPoints
    }
  }
}

module.exports = Warrior