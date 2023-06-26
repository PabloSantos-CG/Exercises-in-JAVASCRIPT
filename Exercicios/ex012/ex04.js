let naveName = prompt('Digite o nome da nave: ');

let character = prompt('Nome da nave: ' + naveName + '\nQual caractere deseja substituir? ')
let newName = ''
let nameChar = ''
for(i = 0; i < naveName.length; i++){
  if(naveName[i] == character){
    nameChar += naveName[i]
  } else {
    newName += naveName[i]
  }
}
alert('Nome após substituição: ' + newName)