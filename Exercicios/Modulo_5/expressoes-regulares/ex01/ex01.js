function PhoneNumber(phoneNumberString) {
  const fixedNumber = phoneNumberString.replace(/[\sa-zA-Z]/g, "")

  const countryCode  = fixedNumber.match(/(?<=\+)\d{1,3}/g)
  const ddd = fixedNumber.match(/(?<=\()\d+(?=\))/)[0]
  const number = fixedNumber.match(/(?<=\)).+/)[0].replace(/-/g, "")

  this.fixedNumber = fixedNumber
  this.countryCode  = countryCode 
  this.ddd = ddd
  this.number = number
}

console.log(new PhoneNumber('+55 (22) 9 9876-5432'))
console.log(new PhoneNumber('+1 (555) a555-999-8888'))