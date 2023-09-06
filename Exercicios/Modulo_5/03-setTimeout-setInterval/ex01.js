console.log('Iniciando...')

setTimeout(() => {
  console.log('Tempo limite!')
}, 1000 * 3)

const idSetTimeOut = setTimeout( () => {
  console.log('Tempo limite!')
}, 1000 * 2)

clearTimeout(idSetTimeOut)

let cont = 0
const idSetInterval = setInterval(() => {
  console.log(`Contando... se parassaram ${cont} segundos`)
  if(cont >= 5) {
    clearInterval(idSetInterval)
  }
  cont++
}, 1000 * 2)