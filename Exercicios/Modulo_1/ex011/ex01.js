// - área do triângulo: base * altura / 2
// - área do retângulo: base * altura
// - área do quadrado: lado²
// - área do trapézio: (base maior + base menor) * altura / 2
// - área do círculo: pi * raio² (considere pi = 3.14)
let option = ''

do{

  //Funções para cálcular áreas
  function areaTriangulo(base, altura) {
    return (base * altura)/2;
  }
  function areaRetangulo(base, altura){
    return base * altura;
  }
  function areaQuadrado(lado){
    return lado * lado;
  }
  function areaTrapezio(base1, base2, altura){
    return ((base1 + base2) * altura)/ 2;
  }
  function areaCirculo(raio){
    let pi = 3.14;
    raio *= raio;
    return pi * raio
  }

  option = prompt(
    'Seja Bem-Vindo(a)!' +
    '\nEssa é a minha - Calculadora Geométrica' +
    '\n\nEscolha uma das opções: ' +
    '\n1. Área do triângulo' +
    '\n2. Área do retângulo' +
    '\n3. Área do quadrado' +
    '\n4. Área do trapézio' +
    '\n5. Área do círculo' +
    '\n6. Sair'
  );

  switch(option){
    case '1':
      let baseT = parseFloat(prompt('Insira o valor da base: '));
      let alturaT = parseFloat(prompt('Insira o valor da altura: '));
      alert(
        'Área do Triângulo = (base * altura) / 2' +
        '\nBase = ' + baseT +
        '\nAltura = ' + alturaT +
        '\n\nA área do Triângulo é : ' + areaTriangulo(baseT, alturaT)
      );
      break

    case '2':
      let baseR = parseFloat(prompt('Insira o valor da base: '));
      let alturaR = parseFloat(prompt('Insira o valor da altura: '));
      alert(
        'Área do Retângulo = (base * altura)' +
        '\nBase = ' + baseR +
        '\nAltura = ' + alturaR +
        '\n\nA área do Retângulo é : ' + areaRetangulo(baseR, alturaR)
      );
      break

    case '3':
      let lado = parseFloat(prompt('Insira o valor de um dos lados do quadrado: '));
      alert(
        'Área do Quadrado = (lado * lado)' +
        '\nLado = ' + lado +
        '\n\nA área do Quadrado é : ' + areaQuadrado(lado)
      );
      break

    case '4':
      let base1 = parseFloat(prompt('Insira o valor da primeira base: '));
      let base2 = parseFloat(prompt('Insira o valor da segunda base: '));
      let alturaTrap = parseFloat(prompt('Insira o valor da altura: '));

      if (base1 > base2){
        baseMaior = base1;
        baseMenor = base2;
      } else {
        baseMaior = base2;
        baseMenor = base1;
      }

      alert(
        'Área do Trapézio = (base maior + base menor)* altura /2' +
        '\nBase maior = ' + baseMaior +
        '\nBase menor = ' + baseMenor +
        '\nAltura = ' + alturaTrap +
        '\nA área do Trapézio é : ' + areaTrapezio(base1, base2, alturaTrap)
      );

      break

    case '5':
      let raio = parseFloat(prompt('Insira o valor do raio do Círculo: '));
      alert(
        'Área do Círculo = pi * (raio * raio)' +
        '\nRaio = ' + raio +
        '\nA área do Círculo é : ' + areaCirculo(raio)
      );
      break

    case '6':
      alert('Encerrando...')
      break

    default:
      alert('Opção inválida')
  }

} while (option !== '6')