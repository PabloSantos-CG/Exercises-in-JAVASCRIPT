const naveName = prompt('Digite o nome da nave: ');
let response = '';
let spaceWarp = 0;

function responseUser (){
  if (response === '1'){
    spaceWarp++
  }
}

response = prompt('Deseja entrar em dobra espacial? \n1. Sim \n2. Não');
responseUser()

while (response !== '2'){

  
  response = prompt(
    'Dobras realizadas: ' + spaceWarp +
    '\n\nDeseja realizar a próxima dobra? \n1. Sim \n2. Não'
    );
  responseUser()
  
  
}

alert(
  'Nave: ' + naveName +
  '\nDobras realizadas: ' + spaceWarp
)