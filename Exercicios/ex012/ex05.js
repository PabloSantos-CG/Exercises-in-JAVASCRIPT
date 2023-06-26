const nome = prompt('Digite o nome da nave: ')
const caractereProibido = prompt('Nome: ' + nome + '\nDigite o caractere proíbido: ')
let invertNome = ''

for(i = nome.length; i > 0; i--) {
  if(nome[i] !== caractereProibido) {
    invertNome += nome[i -1]
  } else {
    break;
  }
}

alert('Nome original: ' + nome + '\nNome após substituição: ' + invertNome)