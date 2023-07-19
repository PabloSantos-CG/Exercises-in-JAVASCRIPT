const alibaba = function (a, b) {
  return a + b
}
console.log(`Função anônima:  ${alibaba(3,2)}`)

const num = (a, b) => {
  return a + b
}
console.log(`Função arrow:  ${num(3,2)}`)

const aladin = (a, b) => a + b
console.log(`Função arrow de uma linha:  ${aladin(3,2)}`)
