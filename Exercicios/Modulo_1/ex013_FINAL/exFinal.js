const vagas = []
const candidatos = {}

function menu (){
  return prompt(
    'Seja Bem-Vindo(a) ao Cadastro Positivo' +
    '\nEscolha uma das opções abaixo:' +
    '\n\n1. Listar vagas disponíveis' +
    '\n\n2. Criar uma nova vaga' +
    '\n\n3. Visualizar uma vaga' +
    '\n\n4. Inscrever um candidato em uma vaga' +
    '\n\n5. Excluir uma vaga' +
    '\n\n6. Sair'
  )
}

const vgText = vagas.reduce()