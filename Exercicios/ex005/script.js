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

const character = window.prompt("Insira o nome do seu personagem:");
const attackPower = parseFloat(window.prompt("Insira o seu poder de ataque:"));

const opponent = window.prompt("Insira o nome do seu oponente:");
let healthPoints = parseFloat(window.prompt(
  "Quantidade de pontos de vida do oponente:"
));
const defensePower = parseFloat(window.prompt(
  "Insira o poder de defesa do oponente:"
));
const shield = prompt("Oponente possui Escudo? \nDIGITE APENAS (s/n)");

let damage = 0;

alert('Personagem: ' + character + 
  '\nPoder de Ataque: ' + attackPower + 
  '\n\nOponente: ' + opponent +
  '\nPontos de Vida: ' + healthPoints +
  '\nPoder de Defesa: ' + defensePower +
  '\nEscudo: ' + shield
);

if (attackPower > defensePower && shield === 'n') {
  damage = attackPower - defensePower;
} else if (attackPower > defensePower && shield === 's') {
  damage = (attackPower - defensePower) / 2;
}

alert('Dano causado = ' + damage)
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
