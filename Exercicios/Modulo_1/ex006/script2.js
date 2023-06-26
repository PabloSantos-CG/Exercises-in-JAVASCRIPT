let speedCar = parseFloat(prompt("Insira a velocidade do carro: "));

while (speedCar > 0) {
  alert("O carro está à " + speedCar + "km/h");
  speedCar -= 20;
  if (speedCar == 40){
    alert('PROBLEMA NO MOTOR!');
    break
  }
}

alert("O carro parou!");
