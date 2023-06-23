alert('Seja Bem-Vindo(a) e que a força esteja com você!');
const pilotName = prompt('Nome do piloto: ');
let naveSpeed = 0;

let speed = parseFloat(prompt('Você é o comandante desta nave, ' + pilotName + '. A que velocidade gostaria de acelerar ?'));

let confirmacao = confirm('Está indo para a velocidade ' + speed + 'km/h ?')

if(confirmacao){
  naveSpeed = speed
} else {
  speed = prompt('Digite a velocidade novamente: ');
  naveSpeed = speed
}

if(naveSpeed < 0){
  alert('A nave está parada. Considere partir e aumentar a velocidade');
} else if(naveSpeed < 40){
  alert('Você está devagar, podemos aumentar mais.');
} else if(naveSpeed >= 40 && naveSpeed < 80) {
  alert('Parece uma boa velocidade para manter.');
} else if(naveSpeed >= 80 && naveSpeed < 100){
  alert('Velocidade alta. Considere diminuir.');
} else if(naveSpeed >= 100){
  alert('Velocidade perigosa. \nControle automático forçado.');
}
alert('Piloto: ' + pilotName + '\nVelocidade atual: ' + naveSpeed);