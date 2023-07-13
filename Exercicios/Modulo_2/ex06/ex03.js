const nave = [
  ['Fenix', 8, true],
  ['Golias', 10, true],
  ['Helmet', 5, false],
  ['Elemental', 3, true],
  ['Darwin', 15, false],
]

const naveTripulantes = nave.filter( function (valorAtual) {
  return valorAtual[1] > 9
}).map( function (valorAtual) {
  return valorAtual[0]
})

const plataforma = nave.findIndex( function (value, index) {
  if (value[2] == false) {
    return index
  }
})

let exibir = ''
exibir += 'Naves com mais de 9 tripulantes: \n' + naveTripulantes.join('\n')
exibir += '\nPrimeira plataforma com engate pendente: ' + (plataforma + 1)

alert(exibir)