function sum (a, b) {
  const x = Number(a)
  const y = Number(b)

  if(isNaN(x) || isNaN(y)) {
    throw new Error('Os Argumentos Devem Ser Dois Números!')
  }

  return x + y
}

try {
  console.log(sum(2, 9))
  console.log(sum(true, 14))
  console.log(sum(undefined, 22))
  console.log(sum(18, "0"))
  console.log(sum(39, null))
  console.log(sum(13, "zero"))
} catch(error) {
  console.log(error.message)
} finally {
  console.log('Blocos de códigos finalizados!')
}