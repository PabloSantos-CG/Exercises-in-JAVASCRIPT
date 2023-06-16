const registros = []
let opcao = ''

do {
  opcao = prompt(
    'Cadastrados: ' + registros.length +
    '\n\nEscolha uma opção: \n1. Adicionar imóvel \n2. Exibir Cadastradas \n3. Sair'
  )

  switch(opcao){
    case '1':
      let novoRegistro = {}
      novoRegistro.proprietario = prompt('Proprietário: ')
      novoRegistro.quartos = parseFloat(prompt('Quantidade de quatos: '))
      novoRegistro.banheiros = parseFloat(prompt('Quantidade de banheiros: '))
      novoRegistro.garagem = prompt('Possui garagem? (Sim/Não)')

      let confirmacao = confirm('Deseja salvar?')
      
      if (confirmacao){
        registros.push(novoRegistro)
        alert('Salvo com sucesso!')
      } else {
        alert('Voltando ao menu...')
      }
    
      break
    case '2':
      for (i = 0; i< registros.length; i++){
          alert(
            (i + 1) + ' º ' + 'Imóvel' +
            '\nProprietário: ' + registros[i].proprietario +
            '\nQuartos: ' + registros[i].quartos +
            '\nBanheiros: ' +  registros[i].banheiros +
            '\nGaragem: ' + registros[i].garagem
          )
      }
      break
    case '3':
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida')
    
  }
} while(opcao !== '3')