class Reservation {
  constructor(amount, bedrooms, days) {
    this.amount = amount
    this.bedrooms = bedrooms
    this.days = days
    this.finalValue = Reservation.rateDefault * days
  }

  static display() {
    console.log(`Rate $${Reservation.rateDefault}`)
  } 

  static rateDefault = 60

  static get premium() {
    return Reservation.rateDefault * 1.35
  }
}

Reservation.display()
const r1 = new Reservation(3, 2, 5)
console.log(r1)

Reservation.rateDefault = 100
Reservation.display()

console.log(Reservation.premium)
const r2 = new Reservation(3, 2, 5)
console.log(r2)
console.log(r2)