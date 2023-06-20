const primaryName = prompt('Digite o nome da primeira pessoa: ');
const primaryAge = prompt('Digite a idade da primeira pessoa: ');
const secundaryName = prompt('Digite o segundo nome: ');
const secundaryAge = prompt('Digite a idade da segunda pessoa: ');



if (primaryAge > secundaryAge){
  let big = primaryAge;
  let smal = secundaryAge;
  let difference = big - smal;
  let age = ' ano'
  if (difference > 1){
    age += 's'
  }
  alert(
    'Apessoa mais velha é: ' + primaryName +
    '\nSua idade é: ' + big +
    '\n\nA pessoa mais nova é: ' + secundaryName +
    '\nSua idade é: ' + smal +
    '\n\nDiferença de idade: ' + difference + age
  )
} else {
  let big = secundaryAge;
  let smal = primaryAge;
  let difference = big - smal;
  if (difference > 1){
    age += 's'
  }
  alert(
    'Apessoa mais velha é: ' + secundaryName +
    '\nSua idade é: ' + big +
    '\n\nA pessoa mais nova é: ' + primaryName +
    '\nSua idade é: ' + smal +
    '\n\nDiferença de idade: ' + difference + age
  )
}