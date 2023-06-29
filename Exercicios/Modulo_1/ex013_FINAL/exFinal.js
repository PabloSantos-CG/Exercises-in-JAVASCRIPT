const vagas = []

function menu (){
  return prompt(
    'Seja Bem-Vindo(a) ao ▼ Cadastro Positivo ▼' +
    '\nEscolha uma das opções abaixo:' +
    '\n\n1. Exibir vagas disponíveis' +
    '\n2. Criar uma vaga' +
    '\n3. Visualizar uma vaga' +
    '\n4. Inscrever um(a) candidato(a)' +
    '\n5. Excluir uma vaga' +
    '\n6. Sair'
  )
}

function exibirVagas () {
  const vaga = vagas.reduce(function (acumulador, valorAtual, indice) {
    acumulador += (indice + 1) + '. ' + '\n'
    acumulador += 'Vaga: ' + valorAtual.nome + '\n'
    acumulador += 'Candidatos: ' + valorAtual.candidatos.length
    return acumulador
  }, '')

  if (!vaga) {
    alert('Sem vagas no momento')
    return
  }
  
  alert(vaga)
}