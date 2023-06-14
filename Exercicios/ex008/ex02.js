let word = prompt('Digite uma palavra: ');
let invertedWord = '';
for (let i = word.length -1; i >= 0; i--){
  invertedWord += word[i]
}
if (invertedWord === word){
  alert('É um Palíndromo.' + '\nNormal: ' + word + '\nInvertida: ' + invertedWord);
} else{
  alert('Não é um Palíndromo.' + '\nNormal: ' + word + '\nInvertida: ' + invertedWord);
}