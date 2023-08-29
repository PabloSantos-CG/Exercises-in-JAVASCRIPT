class Character {
  constructor(name, healthPoints, attackPoints, defensePoints) {
    this.name = name
    this.healthPoints = healthPoints
    this.attackPoints = attackPoints
    this.defensePoints = defensePoints
  }

  returnThis() {
    return this
  }

  attack(opponent) {
    const obj = opponent.returnThis()
    obj.healthPoints = obj.defensePoints - this.attackPoints
    
    console.log(opponent)
  }
}

module.exports = Character