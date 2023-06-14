let term = parseFloat(prompt('Digite o número para saber sua tabuada: '));
let operator = prompt(
  'Digite o número da opção desejada' +
  '\n1.Soma' +
  '\n2.Subtração' +
  '\n3.Multiplicação' +
  '\n4.Divisão'
);

switch (operator){
  case '1':
    for (let indice = 1; indice <= 10; indice++){
      alert(term + ' - ' + indice + ' = ' + (indice - term));
    }
    break
  case '2':
    for (let indice = 1; indice <= 10; indice++){
      alert(term + ' - ' + indice + ' = ' + (indice - term));
    }
    break
  case '3':
    for (let indice = 1; indice <= 10; indice++){
      alert(term + ' * ' + indice + ' = ' + (indice * term));
    }
    break
  case '4':
    for (let indice = 1; indice <= 10; indice++){
      alert(term + ' / ' + indice + ' = ' + (indice / term));
    }
    break
  default:
    alert('Opção inválida!');
}

  