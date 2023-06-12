/*
personagem vai ter:
  1º personagem -> character
    nome:
    poder de ataque:

  2º oponente -> opponent
    nome:
    pontos de vida:
    poder de defesa:
    possui escudo? s/n
*/

let character = window.prompt("Insira o nome do seu personagem:");
let attackPower = parseFloat(window.prompt("Insira o seu poder de ataque:"));

let opponent = window.prompt("Insira o nome do seu oponente:");
let healthPoints = parseFloat(window.prompt(
  "Quantidade de pontos de vida do oponente:"
));
let defensePower = parseFloat(window.prompt(
  "Insira o poder de defesa do oponente:"
));
let shield = window.confirm("Oponente possui Escudo?");

let damage = Number;

alert('Personagem: ' + character + 
  '\nPoder de Ataque: ' + attackPower + 
  '\n\nOponente: ' + opponent +
  '\nPontos de Vida: ' + healthPoints +
  '\nPoder de Defesa: ' + defensePower +
  '\nEscudo: ' + shield
);

if (attackPower > defensePower && shield == false) {
  damage = attackPower - defensePower;
} else if (attackPower > defensePower && shield == true) {
  damage = (attackPower - defensePower) / 2;
} else {
  damage = 0;
}

healthPoints -= damage;

alert('---- INFORMAÇÕES ATUALIZADAS ----' +
  '\nPersonagem: ' + character + 
  '\nPoder de Ataque: ' + attackPower + 
  '\n\nOponente: ' + opponent +
  '\nPontos de Vida: ' + healthPoints +
  '\nPoder de Defesa: ' + defensePower +
  '\nEscudo: ' + shield +
  '\nDano causado: ' + damage 
);
