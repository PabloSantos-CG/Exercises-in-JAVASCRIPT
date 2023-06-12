/* CONVERSOR DE MEDIDAS

milímetro  (mm)
centímetro (cm)
decímetro  (dm)
decâmetro  (dam)
hectômetro (hm)
quilômetro (km)
*/
const medida = prompt(
  "Escolha uma opção para realizar a conversão: \na) milímetro \nb) centímetro \nc) decímetro \nd) decâmetro \ne) hectômetro \nf) quilômetro"
);

let valorMedida = parseFloat(prompt("Digite o valor em metros: "));

switch (medida) {
  case "a":
    valorMedida *= 1000;
    alert("O valor convertido em milímetro é: " + valorMedida);
    break;
  case "b":
    valorMedida *= 100;
    alert("O valor convertido em centímetro é: " + valorMedida);
    break;
  case "c":
    valorMedida *= 10;
    alert("O valor convertido em decímetro é: " + valorMedida);
    break;
  case "d":
    valorMedida /= 10;
    alert("O valor convertido em Decêmtro(dam) é: " + valorMedida);
    break;
  case "e":
    valorMedida /= 100;
    alert("O valor convertido em Hectômetro(hm) é: " + valorMedida);
    break;
  case "f":
    valorMedida /= 1000;
    alert("O valor convertido em Quilômetro(km) é: " + valorMedida);
    break;
  default:
    alert("Opção inválida! \nEscolha uma das listadas anteriormente.");
}
