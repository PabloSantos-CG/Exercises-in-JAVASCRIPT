let name_1 = prompt("Qual o nome do primeiro veículo ?");
let speed_1 = parseFloat(prompt("Qual sua velocidade máxima ?"));

let name_2 = prompt("Qual o nome do segundo veículo ?");
let speed_2 = parseFloat(prompt("Qual sua velocidade máxima ?"));


if (speed_1 > speed_2) {
  alert('O carro mais rápido é: ' + name_1 + '\nPodendo chegar até: ' + speed_1 + 'km/h');
} else if (speed_1 < speed_2) {
  alert('O carro mais rápido é: ' + name_2 + '\nPodendo chegar até: ' + speed_2 + 'km/h');
} else {
  alert('Empate');
}