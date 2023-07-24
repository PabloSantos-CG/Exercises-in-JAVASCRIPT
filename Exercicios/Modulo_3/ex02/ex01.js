//media simples
const simpleAverage = (...param) => {
  const result = param.reduce( (accum, value) => accum + value, 0)
  return result / param.length
}

console.log(`Media aritimédica Simples: ${simpleAverage(2, 2, 2, 10)}`)

//media ponderada
const weightedAverage = (...param) => {
  const calc = param.reduce( (accum, { n, p }) => accum + (n * (p ?? 1)), 0)
  const weight = param.reduce((accum, value) => accum + (value.p ?? 1), 0)
  return calc / weight
}

  console.log(`Media aritimédica Simples: 
  ${weightedAverage(
    { n: 7, p: 2},
    { n: 7},
    { n: 7, p: 2}
  )}`)


//mediana
const median = (...param) => {
 const newParam = [...param].sort((a, b) => a - b)
 const midle = Math.floor(newParam.length / 2)

 if (newParam.length % 2 !== 0) {
  return newParam[midle]
 } else {
   const firstMidle = newParam[midle - 1]
   const lastMidle = newParam[midle]
   return simpleAverage(firstMidle, lastMidle)
  }
}

console.log(`Mediana: ${median(3, 5, 4, 5)}`)

//Moda
const moda = (...param) => {
  const amount = param.map(value => [
    value,
    param.filter(element => element === value).length
  ])
  amount.sort((a, b) => b[1] - a[1])
  return amount[0][0]
}

console.log(`${moda(9, 3, 5, 4, 5, 2, 2, 2)}`)