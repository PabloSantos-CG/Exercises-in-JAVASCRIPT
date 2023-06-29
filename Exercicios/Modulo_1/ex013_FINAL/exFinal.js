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
//Função para listar as vagas
function exibirVagas () {
  const exibirVagas = vagas.reduce(function (acumulador, valorAtual, indice) {
    acumulador += 'Índice ' + indice + ' º ' + '\n'
    acumulador += 'Vaga: ' + valorAtual.nome + '\n'
    acumulador += 'Candidatos: ' + valorAtual.candidatos.length
    return acumulador
  }, '')

  if (!exibirVagas) {
    alert('Sem vagas no momento')
    return
  }
  
  alert(exibirVagas)
}

// Função para criar uma vaga
function criarVaga () {
  const nome = prompt('Informe o nome da vaga: ')
  const descricao = prompt('Informe a descrição da vaga: ')
  const dataLimite = prompt('Informe a data limite da vaga: ')

  const confirmacao = confirm(
    'Confirme a criação da seguinte vaga: ' +
    '\nNome da vaga: ' + nome +
    '\nDescrição: ' + descricao +
    '\nData limite: ' + dataLimite
  )

  if (confirmacao) {
    const vaga = { nome, descricao, dataLimite, candidatos: []}
    vagas.push(vaga)
    alert('Vaga criada com sucesso.')
    return
  }
}

//Função visualizar uma vaga
function visualizarUmaVaga () {
  const indice = prompt('Informe o índice da vaga: ')
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce( function (acumulador, valorAtual) {
    acumulador + '\n' + ' - ' + valorAtual
  }, '')

  alert(
    'Vaga nº ' + indice +
    '\nNome: ' + vaga.nome +
    '\nDescrição: ' + vaga.descricao +
    '\nData Limite: ' + vaga.dataLimite +
    '\nCandidatos inscritos: ' + vaga.candidatos.length +
    '\nCandidatos: ' + candidatosEmTexto
  )
}

//Função inscrever um candidato
function inscreverUmCandidato () {
  const indice = prompt('Informe o índice da vaga: ')
  const nomeCandidato = prompt('Informe o nome do candidato: ')
  const vaga = vagas[indice]

  const confirmacao = confirm(
    'Deseja inscrever o candidato ' + nomeCandidato + ' na seguinte vaga? ' +
    '\nVaga nº ' + indice +
    '\nNome: ' + vaga.nome +
    '\nDescrição: ' + vaga.descricao +
    '\nData Limite: ' + vaga.dataLimite +
    '\nCandidatos inscritos: ' + vaga.candidatos.length
  )

  if (confirmacao) {
    vaga.candidatos.push(nomeCandidato)
    alert(
      'Candidato ' + nomeCandidato + ' inscrito com sucesso.'
    )
    return
  }

}
