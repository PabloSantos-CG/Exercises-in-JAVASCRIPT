function constru(email) {
  const addressEmail = email.match(/.+(?=\@)/)[0]
  const typeEmail = email.match(/(?<=\@).+(?=\.)/)[0]

  this.address = addressEmail
  this.type = typeEmail
}

console.log(new constru("pabloalter0_1@gmail.com"))