class Character {
  constructor(name, healthPoints, attackPoints, defensePoints) {
    this.name = name
    this.healthPoints = healthPoints
    this.attackPoints = attackPoints
    this.defensePoints = defensePoints
  }

  attack(param) {
    param.healthPoints -= param.attackPoints - param.defensePoints
  }
}

module.exports = Character