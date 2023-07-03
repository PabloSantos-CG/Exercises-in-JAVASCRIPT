const caixaInterativa = document.getElementById('bloco')
caixaInterativa.addEventListener('mouseenter', function () {
  this.innerText = 'mouse entrou na box'
})

caixaInterativa.addEventListener('mouseout', function () {
  this.innerText = 'mouse saiu na box'
})