/*
na primeira linha ele apaga a minha variavel pacientes
depois utiliza o for para escrever dentro da variável pacientes todos os dados que o array -> fila possui
depois exibi na variavel opcao a variavel pacientes que só existe dentro do escopo do laço de repetição para que seja apagada sempre quando o laço se repete
*/
//1º PASSO
//  Criar um laço de repetição para que seja exibido o menu os  pacientes, as opções e fique nesse ciclo após interações com o usuário
//2º PASSO
// criar um laço de repetição para pegar as informações do array e jogar dentro de uma string, que sempre ao reiniciar o laço ela vai limpar seu valor e reescrever com os valores do array

const fila = []
let menu = ''

do{
  let patients = ''
  for (let i = 0; i < fila.length; i++){
    patients += (i + 1) + ' º Paciente: ' + fila[i] + '\n'
  }

  menu = prompt(
    'Pacientes:\n' + patients + '\n\n' +
    'Digite o número da opção desejada: \n1.Novo Paciente \n2.Consultar Paciente \n3.Sair'
  )

  switch(menu){
    case '1':
      fila.push(prompt('Digite o nome do paciente: '))
      break
    case '2':
      let patientsConsult =  fila.shift()
      if (!patientsConsult){
        alert('Paciente não está na fila')
      }else {
        alert('Paciente: ' + patientsConsult + ' Removido.')
      }
      break
    case '3':
      alert('Encerrando...')
      break
    default:
      alert('Opção inválida')
  }
} while(menu !== '3')