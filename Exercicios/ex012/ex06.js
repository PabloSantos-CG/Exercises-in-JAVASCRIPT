function menu (){
  return prompt(
    'Seja Bem-Vindo(a)' +
    '\nEscolha uma das opções abaixo: ' +
    '\n1. Acelerar a nave em 5km/s' +
    '\n2. Desacelerar a nave em 5km/s' +
    '\n3. Imprimir dados de bordo' +
    '\n4. Sair do programa'
  )
}

function speedShip (a){
  return a + 5
}

function speedStop (a){
  if(a > 0){
    return a -= 5
  } else {
    return a
  }
}

let option = ''
let speed = 0
const naveName = prompt('Informe o nome da nave: ')

do {
  option = menu()

  switch(option){
    case '1':
      speed = speedShip(speed)
      break
    case '2':
      speed = speedStop(speed)
      break
    case '3':
      alert(
        'Nome da nave: ' + naveName +
        '\nVelocidade atual: ' + speed
      )
      break
    case '4':
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida')
  }
} while (option !== '4')