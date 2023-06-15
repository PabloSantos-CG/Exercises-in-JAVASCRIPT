const cheap = []
let option= ''
do{
  option = prompt('Quantidade de cartas no baralho: ' + cheap.length + '\n\nEscolha a opção desejada: ' + '\n1.Adicionar uma carta' + '\n2.Puxar uma carta' + '\nSair')

  switch(option){
    case '1':
      cheap.push(prompt('Insira o nome da cara: '))
      break
    case '2':
      let consultCheap = cheap.pop()
      if (!consultCheap){
        alert('Carta inexistente')
      } else{
        alert('Você puxou: ' + consultCheap)
      }
      break
    case '3':
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida')
  }
} while(option !== '3')