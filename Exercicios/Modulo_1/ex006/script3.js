const nomeTurista = prompt('Olá, turista! Qual o seu nome?');
cidades = ' ';
contagem = 0 ;

let pergunta = prompt('Já visitou alguma cidade? (Sim/Não');

while (pergunta === 'Sim'){
  cidade = prompt('Qual nome da cidade?');
  cidades +=' - ' + cidade + '\n';
  contagem++;
  pergunta = prompt('Já visitou outra cidade? (Sim/Não)');
}

alert(
  'Turista: ' + nomeTurista +
  '\nQuantidade de cidades visitadas: ' + contagem +
  '\nCidades visitadas: ' + '\n' + cidades
)