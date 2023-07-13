function stop () {
  alert(
    'Nave: ' + nave.name +
    '\nTipo: ' + nave.type +
    '\nVelocidade máxima: ' + nave.maximumShipSpeed +
    '\nVelocidade atual: ' + nave.currentSpeed +
    '\n\nRealizando a parada total da nave!'
  )
  
  while (nave.currentSpeed > 0) {
    nave.currentSpeed -= 10
    alert('Velocidade: ' + nave.currentSpeed)
  }

  alert('Parada Concluída Com Sucesso!')
}

function aceleration () {
  let speed = parseFloat(prompt('Quanto deseja acelerar ?'))
  if(speed) {
    nave.currentSpeed += speed
    alert(
      'Acelerando + ' + speed + 
      '\nVelocidade atual: ' + nave.currentSpeed
    )

    if (nave.currentSpeed > nave.maximumShipSpeed) {
      alert(
        'A nave ultrapassou sua velocidade limite \n\nPiloto automático acionado!'
      )

      while (nave.currentSpeed > nave.maximumShipSpeed) {
        let speed = 40
        nave.currentSpeed -= speed
        alert('Velocidade atual: ' + nave.currentSpeed)
      }

    }
  } else {
    alert('Você deve inserir a velocidade!')
    return
  }
}

let nave = {}
const shipName = prompt('Informe o nome da nave: ')
const shipType = prompt('Informe o tipo de nave: ')
const speedMaximum = Number(prompt('Insira a velocidade máxima da nave: '))

nave.name = shipName
nave.type = shipType
nave.maximumShipSpeed = speedMaximum
nave.currentSpeed = 0

let option = ''

do {
  option = prompt(
    'Nave: ' + nave.name +
    '\nVelocidade atual: ' + nave.currentSpeed +
    '\n\nDeseja acelerar ou parar a nave ? ' +
    '\n1. Acelerar' +
    '\n2. Parar'
  )

  switch (option) {
    case '1':
      aceleration()
      break
    case '2':
      stop()
      break
    default:
      alert('Opção inválida')
  }

} while (option !== '2')